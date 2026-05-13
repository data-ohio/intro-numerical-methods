% mypoisson
% Poisson on a Rectangle
% Solves u_xx + u_yy = f(x,y)
% with boundary conditions:
% u(a,y) = u(x,c) = 1
% u(b,y) = 1 + 5/8 y
% u(x,d) = 1 + 1/2 x
% with f(x,y) = .5 sin(x)sin(y)

% Define the rectangle and nodes
a = 0;
b = 10;
c = 0;
d = 8;
m = 15;
n = 10;
h = (b-a)/m;
k = (d-c)/n;
x = a:h:b;
y = c:k:d;

% Assign number of iterations and calculate constants
maxit = 0;
c1 = h^2/(2*(h^2 + k^2));
c2 = k^2/(2*(h^2 + k^2));
c3 = k^2*c1;

% Assign initial values and boundary conditions
u = zeros(m+1,n+1);
u(1,:) = 1;
u(:,1) = 1;
u(:,n+1) = 1 + 5*sin(x(:)*pi/b/2);
u(m+1,:) = 1 + (5/8)*y(:);

% Assign values of f(x,y) in the interior
f = zeros(m+1,n+1);
for i = 2:m
f(i,:) = .5*sin(x(i)).*sin(y(:));
end

% Iterate values of u in the interior
for j = 1:maxit
u(2:m,2:n) = c1*(u(2:m,3:n+1)+u(2:m,1:n-1)) + c2*(u(3:m+1,2:n)+u(1:m-1,2:n)) - c3*f(2:m,2:n);
end

% Plot the result
mesh(x,y,u')
