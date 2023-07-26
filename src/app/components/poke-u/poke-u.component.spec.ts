import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeUComponent } from './poke-u.component';

describe('PokeUComponent', () => {
  let component: PokeUComponent;
  let fixture: ComponentFixture<PokeUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeUComponent]
    });
    fixture = TestBed.createComponent(PokeUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
