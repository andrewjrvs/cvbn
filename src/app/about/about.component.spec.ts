import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameworkModule } from '../framework/framework.module';
import { SkillBarComponent } from '../skill-bar/skill-bar.component';
import { PersonalInformationService } from '../personal-information.service';
import { MockPersonalInformationService } from '../personal-information.mockservice';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrameworkModule]
      , declarations: [ AboutComponent, SkillBarComponent ]
    }).overrideComponent(
      AboutComponent, {
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
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
