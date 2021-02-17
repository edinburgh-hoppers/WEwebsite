#   The official website for the Women EmpowerED conference

---

Basic notes: 

- The site is generated using Jekyll, a static site generator. It is hosted on GitHub pages. To build or serve the website locally, you will need to download the [Jekyll command line tools and Ruby](https://jekyllrb.com/docs/installation/). 
- To run the website locally, clone the repo on your machine, enter the folder in the command line, and run the following command: 
  `bundle exec jekyll serve`
- Each of the pages in the website is under \_pages. There is only one stylesheet - styles.scss, which is in the root folder. We can include code blocks by writing them in HTML files and then putting it in the \_includes folder. 

## NOTE: ```bundle exec jekyll serve --baseurl "" ``` only works with the github pages plugin. 
