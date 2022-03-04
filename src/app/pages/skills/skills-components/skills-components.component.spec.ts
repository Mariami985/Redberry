import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponentsComponent } from './skills-components.component';

describe('SkillsComponentsComponent', () => {
  let component: SkillsComponentsComponent;
  let fixture: ComponentFixture<SkillsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
