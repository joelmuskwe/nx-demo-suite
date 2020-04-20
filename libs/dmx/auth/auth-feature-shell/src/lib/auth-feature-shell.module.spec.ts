import { async, TestBed } from '@angular/core/testing';
import { AuthFeatureShellModule } from './auth-feature-shell.module';

describe('AuthFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthFeatureShellModule).toBeDefined();
  });
});
