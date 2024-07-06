Steps to implement the project:

1. Clone this repository by
   ```git clone https://github.com/VarshithChilamkurthi/headless-wordpress-graphql-demo.git```
3. ```npm install``` to install all the dependencies.
4. ```npm run dev``` to run on the local host.
5. But before running the project, we need to set up the wordpress account locally. For that, I used Local to create a new wordpress CMS with admin credentials.
   ![image](https://github.com/VarshithChilamkurthi/headless-wordpress-graphql-demo/assets/52421766/0918473d-76f2-496c-89ee-deb55771aca6)
6. Add few demo posts to fetch using Graphql.
7. The wordpress interface would look something similar to this,
  ![image](https://github.com/VarshithChilamkurthi/headless-wordpress-graphql-demo/assets/52421766/cc0c9f37-dea3-40da-b403-0a4b0cf962fa)
8. Here, I created 6 posts. But we can add or remove posts/data from wordpress dashboard, and our website would automatically updates the content.
9. In order to access Graphql, we need to install WPGraphQL plugin,
    ![image](https://github.com/VarshithChilamkurthi/headless-wordpress-graphql-demo/assets/52421766/afe8c4de-40e1-42cd-9556-8855ba7c581f)
10. Now we can query any data according to our requirements. For example, 
   ![image](https://github.com/VarshithChilamkurthi/headless-wordpress-graphql-demo/assets/52421766/2163715c-0c14-488d-9374-de53482024a0)
   Here, I'm trying to fetch the post by ID, and getting title, date, content, uri parameters to display the content in a new page.
11. After this setup, we can see the data.
    ![image](https://github.com/VarshithChilamkurthi/headless-wordpress-graphql-demo/assets/52421766/9cb6eca8-faff-4340-aaa8-616af7ccb007)
    ![image](https://github.com/VarshithChilamkurthi/headless-wordpress-graphql-demo/assets/52421766/9560a574-4e5d-4954-ad50-ebb1e22356be)

