import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribrionComponent } from './sub-services.component';

describe('SubServicesComponent', () => {
  let component: SubscribrionComponent;
  let fixture: ComponentFixture<SubscribrionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscribrionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
