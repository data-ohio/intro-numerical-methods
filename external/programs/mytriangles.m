% Program to produce the triangulation,
% boundary conditions and initial values
% at the interior nodes.

% V contains vertices
V = [ 1/2 1/2  
       1    1 
      3/2 1/2 
      .5  1.5 
       0    0  
       1    0  
       2    0   
       2    1 
       1.5 1.5 
       1    2  
       0    2  
       0    1];
   
% T assigns the traingles
T = [ 1 5 12
      1 5 6
      1 2 6
      1 2 12
      3 2 6
      3 6 7
      3 7 8
      3 8 2
      2 8 9
      2 9 10
      4 11 12
      4 12 2
      4 2 10
      4 10 11];
% x, y are row vectors containing coordinates of vertices
x = V(:,1)';
y = V(:,2)';
% n is the number of vertices
n = 12;
% m is the number of internal vertices
m = 4;
% p is the number of triangles
p = 14;

% Set the coefficients c_1, ..., c_m equal to zero at interior
% vertices and equal to the boundary values on the boundary.
% The first 4 entries are interior vertices, the final 8 are
% boundary vertices.
c = [ 0 0 0 0 0 0 0 1 1 1 0 0 ];

% Plot the initial mesh
trimesh(T,x,y,c)
