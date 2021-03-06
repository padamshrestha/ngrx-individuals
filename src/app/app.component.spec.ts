import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { RouterOutletDirectiveMock } from '../testing/router.mock';
import { AppComponent } from './app.component';
import { IndividualsComponentMock } from './individuals/individuals.component.mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        RouterOutletDirectiveMock,
        IndividualsComponentMock
      ],
      providers: [
        FormBuilder
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
