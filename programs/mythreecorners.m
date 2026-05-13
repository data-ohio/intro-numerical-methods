function  I = mythreecorners(f,V,T)
    % Integrates a function based on a triangulation, using three corners
    % Inputs: f -- the function to integrate
    %         V -- the vertices. 
    %              Each row has the x and y coordinates of a vertex
    %         T -- the triangulation. 
    %              Each row gives the indices of the three corners
    % Output: the approximate integral
    x = V(:,1); % extract x and y coordinates of all nodes
    y = V(:,2);
    I=0;                % start accumulator at 0     
    p = size(T,1);      % get number of triangles
    for i = 1:p         % loop through the triangles
       x1 = x(T(i,1));  % find coordinates of the three corners
       x2 = x(T(i,2));
       x3 = x(T(i,3));
       y1 = y(T(i,1));
       y2 = y(T(i,2));
       y3 = y(T(i,3));
       A = .5*abs(det([x1, x2, x3; y1, y2, y3; 1, 1, 1])); %find area
       z1 = f(x1,y1);  % find values at the three corners
       z2 = f(x2,y2);
       z3 = f(x3,y3);
       zavg = (z1 + z2 + z3)/3;  % average the values
       I = I + zavg*A;   % accumulate integral
    end
end
