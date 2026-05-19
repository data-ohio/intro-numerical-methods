% Finite elements program
% adapted from "Applied Numerical Anaylsis" by L. Faussett, Prentice Hall.
% Solves u_xx + u_yy = 0 
% with fixed boundary conditions 
% A list of vertices V and a list of triangles T must be in memory.
% x and y must be row vectors containing coordinates of the vertices.
% The following variable must also be in memory:
% n is the number of vertices
% m is the number of internal vertices
% p is the number of triangles
% z input values at the vertices, including boundary values.

% Plot the boundary conditions and initial values of nodes
figure
trimesh(T,x,y,z)

%Define basis function for each node
for j = 1:n                       % for each node (finite element)  
    for k = 1:p                   % for each triangle
        for i = 1:3               % for each vertex of the triangle
            aa(i,1) = 1;
            aa(i,2) = V(T(k,i),1);
            aa(i,3) = V(T(k,i),2);
            if T(k,i) == j        % if the vertex goes with the  element
                bb(i,1) = 1;      % set the value to one.
            else
                bb(i,1) = 0;      % otherwise set it to zero.
            end
        end
        abc = aa\bb;      % solve for coefficients of function j on T_k.
        A(j,k) = abc(1);
        B(j,k) = abc(2);
        C(j,k) = abc(3);
    end
end

% Calculate the areas of the triangles
H = ones(1,p);  
for i = 1:p
   H(i) = .5*abs(det([x(T(i,1)), x(T(i,2)), x(T(i,3)); y(T(i,1)), y(T(i,2)), y(T(i,3)); 1, 1, 1]));
end

% This section solves for the values at the interior vertices
for i = 1:m
    for j = 1:m
        s(1:p) = B(i,1:p).*B(j,1:p) + C(i,1:p).*C(j,1:p);
        AAA(i,j) = s*H';
    end
end
for i = 1:m
    for j = m+1:n
        k = j - m;
        s(1:p) = B(i,1:p).*B(j,1:p) + C(i,1:p).*C(j,1:p);
        G(i,k) = s*H';
    end
end
d(1:m) = -G*z(m+1:n)';
z(1:m) = AAA\d';


% Plot the solution
figure
trimesh(T,x,y,z)
