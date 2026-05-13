% mynonlinheat (lacks comments)
% Purpose:
L = 4;             %
n = 4;             %
h = L/n;           %
hh = h^2/3;        %
u0 = 0;            %
uL = 0;            %
ub = .5;           % 
ub4 = ub^4;        %
x = 0:h:L;         %
g = sin(pi*x/4);   %
u = zeros(1,n+1);  %
steps = 4;         %
u(1)=u0;           % 
u(n+1)=uL;         %
for j = 1:steps
     %
     u(2:n) = (u(3:n+1)+u(2:n)+u(1:n-1))/3 + hh*(-u(2:n).^4+ub4+g(2:n));
end
plot(x,u)
