import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nginfo } from './nginfo';

describe('Nginfo', () => {
  let component: Nginfo;
  let fixture: ComponentFixture<Nginfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nginfo],
    }).compileComponents();

    fixture = TestBed.createComponent(Nginfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
