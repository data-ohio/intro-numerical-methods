%myheatdisk
R=5;      % radius of disk
n=100;    % number of subintervals
h=R/n;    % step size
hh=h^2;   % h^2 is used in each loop
steps=500;
d = .1;  % radiation coefficient
ub=10;    % temperature of surroundings
uR=10;    % temperature at the edge
ub4=ub^4; % ub^4 is used in each loop
r=-h/2:h:R+h/2;   % grid points
g=(r-5).^2;       % equation of source of heat
u=ones(1,n+2)*10; % sets initial temperatrue profile
u(n+2) = uR;      % sets temperature at edge
plot(r,u)         % plots initial temperature profile
hold on; 
for j=1:steps    
    for i=2:n+1  
     u(i)=-hh*d*(u(i)^4-ub4)/3 + hh*g(i)/3 + h*(u(i+1)-u(i-1))/(6*r(i)) + (u(i-1)+u(i)+u(i+1))/3;
    end
    u(1)=u(2); % makes u'(0) = 0
    plot(r,u)  % plots temperature profiles
end
hold off;
