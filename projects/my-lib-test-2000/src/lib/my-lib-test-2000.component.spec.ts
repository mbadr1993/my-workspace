import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibTest2000Component } from './my-lib-test-2000.component';

describe('MyLibTest2000Component', () => {
  let component: MyLibTest2000Component;
  let fixture: ComponentFixture<MyLibTest2000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLibTest2000Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLibTest2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
