# Git Workflow Exercise
A well known workforce development company, Catalyte, has approached you to do some Quality Assurance. Someone messed up their About Us page by capitalizing certain words. Catalyte has given you a text file with their page content, and would like you to replace all of the UPPERCASE words with lowercase words. You should follow an appropriate git workflow as described below.

## Requirements
1. Follow the [How to use a Template](https://docs.google.com/document/d/12kYyZt2AW0U2_QLXWCRDmwfwo_XXuw0j0o4wU-TDb88/edit?usp=sharing) document to create your copy of this exercise.
2. Create a branch titled `<paragraph-n>`, where n represents which paragraph you're editing.
3. Change the first UPPERCASE word in that paragraph to be lowercase.
4. Add and commit your change. Leave a commit message of `"change <UPPERCASE> to <lowercase>"`, where `<UPPERCASE>` and `<lowercase>` represent the actual word changed.
5. Push up your branch to the remote
6. Repeat steps 3-5 for each UPPERCASE word in paragraph n
7. Merge branch `<paragraph-n>` in with master
8. Push up master
9. Repeat steps 2-8 for each remaining paragraph
10. At the end, your git log should contain a commit for every word that you edited. You should also have one branch for each paragraph in the file.
