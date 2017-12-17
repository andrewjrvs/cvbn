import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameworkModule } from '../framework/framework.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalInformationService } from '../personal-information.service';
import { MockPersonalInformationService } from '../personal-information.mockservice';
import { ProjectsComponent } from './projects.component';
import { BlurbComponent } from '../blurb/blurb.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrameworkModule, NoopAnimationsModule],
      declarations: [ ProjectsComponent, BlurbComponent ]
    }).overrideComponent(
      ProjectsComponent, {
        set: {
          providers: [
            { provide: PersonalInformationService, useClass: MockPersonalInformationService }
          ]
        }
      }
    )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
