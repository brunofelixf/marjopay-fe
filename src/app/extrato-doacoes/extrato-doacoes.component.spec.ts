import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoDoacoesComponent } from './extrato-doacoes.component';

describe('ExtratoDoacoesComponent', () => {
  let component: ExtratoDoacoesComponent;
  let fixture: ComponentFixture<ExtratoDoacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtratoDoacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtratoDoacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
