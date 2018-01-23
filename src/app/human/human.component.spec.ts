import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanComponent } from './human.component';
import { FormsModule } from '@angular/forms';

describe('HumanComponent', () => {
  let component: HumanComponent;
  let fixture: ComponentFixture<HumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit("age should be greater than 18",()=>{
    component.age=19;
    component.checkeligibility(component.age);
    expect(component.isEligible).toBeTruthy();
  })
});
