import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, ReplaySubject, Subject, Observable } from 'rxjs';


import { Skill } from './skill';
import { Project } from './project';
import { PROJECTS } from './mock-projects';

import { environment } from '../environments/environment';

@Injectable()
export class PersonalInformationService {

    private skillsURL = environment.urls.skills;

    private skillsSubject: Subject<Skill[]> = new ReplaySubject<Skill[]>();
    private loadingSkills = new BehaviorSubject<boolean>(false);
    private skillsFirstLoad = false;

    private projectSubject: Subject<Project[]> = new ReplaySubject<Project[]>();
    private loadingProjects = new BehaviorSubject<boolean>(false);
    private projectsFirstLoad = false;

    /**
     * Observable list of skills had
     */
    public get skills$(): Observable<Skill[]> {
        if (!this.skillsFirstLoad) {
            this.skillsFirstLoad = true;
            this.loadSkillsFromSource();
        }
        return this.skillsSubject.asObservable();
    }

    /**
     * Observable list of projects worked on
     */
    public get projects$(): Observable<Project[]> {
        if (!this.projectsFirstLoad) {
            this.projectsFirstLoad = true;
            this.loadProjectsFromSource();
        }
        return this.projectSubject.asObservable();
    }

    constructor(private _http: HttpClient) { }

    /**
     * This will load the projects from their source
     * - currently this is from a mock file
     */
    private loadProjectsFromSource(): void {
        this.loadingProjects.next(true);
        this.projectSubject.next(PROJECTS);
        this.loadingProjects.next(false);
    }

    /**
     * This will load the list of skills from their source
     * by pulling them from the skills file.
     */
    private loadSkillsFromSource(): void {
        this.loadingSkills.next(true);
        this._http.get(this.skillsURL).subscribe(
            (data) => {
                this.skillsSubject.next(data as Skill[]);
            },
            (err) => {
                this.skillsSubject.error(err);
            },
            () => {
                this.loadingSkills.next(false);
            }
        );
    }
}
