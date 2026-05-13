function [t x u] = myheat(f,g1,g2,L,T,m,n,c)
    % function [t x u] = myheat(f,g1,g2,L,T,m,n,c)
    % solve u_t = c u_xx  for 0<=x<=L, 0<=t<=T
    %  BC:  u(0, t) = g1(t);  u(L,t) = g2(t)  
    %  IC:  u(x, 0) = f(x)
    % Inputs:  
    %    f -- function for IC
    %    g1,g2 -- functions for BC
    %    L -- length of rod
    %    T -- length of time interval
    %    m -- number of subintervals for x
    %    n -- number of subintervals for t
    %    c -- rate constant in equation
    % Outputs:
    %    t -- vector of time points
    %    x -- vector of x points
    %    u -- matrix of the solution, u(i,j)~=u(x(i),t(j))
    % Also plots.

    h = L/m;  k = T/n;          % set space and time step sizes
    r = c*k/h^2;  rr = 1 - 2*r;
    x = linspace(0,L,m+1);      % set space discretization
    t = linspace(0,T,n+1);      % set time discretization
    %Set up the matrix for u:
    u = zeros(m+1,n+1);
    % evaluate initial conditions
    u(:,1) = f(x);
    % evaluate boundary conditions
    u(1,:) = g1(t);  u(m+1,:) = g2(t);

    % find solution at remaining time steps
    for j = 1:n
        % explict method update at next time
        u(2:m,j+1) = r*u(1:m-1,j) + rr*u(2:m,j) + r*u(3:m+1,j);
    end

    % plot the results
    mesh(x,t,u')
end   
