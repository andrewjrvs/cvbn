import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePageComponent } from './base-page.component';
import { FooterComponent } from '../footer/footer.component';

describe('BasePageComponent', () => {
  let component: BasePageComponent;
  let fixture: ComponentFixture<BasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePageComponent, FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
