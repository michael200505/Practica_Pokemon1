import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRelations } from './type-relations';

describe('TypeRelations', () => {
  let component: TypeRelations;
  let fixture: ComponentFixture<TypeRelations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeRelations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeRelations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
