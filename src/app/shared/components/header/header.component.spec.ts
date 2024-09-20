import { render, screen } from '@testing-library/angular';
import { HeaderComponent } from './header.component';
import { NavLink } from '../../models/NavLink.model';

describe('HeaderComponent', () => {
  const mockNavLinks: NavLink[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Login', path: '/login' }
  ];

  it('should render the header and nav links correctly', async () => {
    await render(HeaderComponent, {
      componentProperties: {
        navLinks: mockNavLinks,
      },
    });

    // Verificar que el título esté presente
    const title = screen.getByText('El Fogón de María');
    expect(title).toBeTruthy();

    // Verificar que los enlaces de navegación se renderizan
    const homeLink = screen.getByText('Inicio');
    const loginLink = screen.getByText('Login');
    expect(homeLink).toBeTruthy();
    expect(loginLink).toBeTruthy();

    // Verificar que los enlaces tengan el routerLink correcto
    expect(homeLink.getAttribute('ng-reflect-router-link')).toEqual('/');
    expect(loginLink.getAttribute('ng-reflect-router-link')).toEqual('/login');
  });
});
