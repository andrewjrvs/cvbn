import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FrameworkModule } from '../framework/framework.module';
import { SkillBarComponent } from '../skill-bar/skill-bar.component';
import { PersonalInformationService } from '../personal-information.service';
import { MockPersonalInformationService } from '../personal-information.mockservice';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FrameworkModule, NoopAnimationsModule]
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
