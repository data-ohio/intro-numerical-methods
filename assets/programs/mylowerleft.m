function I = mylowerleft(f,a,b,c,d,m,n)
    % Computes an approximate integral of a function of two variables f(x,y).
    % Uses the lower-left corner to evaluate.
    % Inputs:
    %    a,b -- define the interval in x, namely a<x<b.
    %    c,d -- define the interval in y, namely c<y<d.
    %    m -- the number of (evenly spaced) intervals to use in x.
    %    n -- the number of (evenly spaced) intervals to use in y.
    % Output: The approximate value of the integral.
    %
    % Note: This program intentionally has a bug. Find and fix it.
    h = (b-a)/m;                            % step size in x direction
    k = (d-c)/n;                            % step size in y direction
    [X,Y] = meshgrid(a:h:b,c:k:d);          % sets up a grid
    Z=f(X,Y);
    mesh(X,Y,Z)                             % plot, just for fun
    S = sum(sum(Z(1:m,1:n)));
    I = S*h*k;
end
