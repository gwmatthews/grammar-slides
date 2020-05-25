SLIDES:=$(wildcard *.Rmd)
SLIDES_HTML:=$(patsubst %.Rmd, %.html, $(SLIDES))

# render RmD to html

html : $(SLIDES_HTML)

%.html : %.Rmd
	R -e 'rmarkdown::render("$<", output_file = "$*.html")'

.PHONY : clean

clean :
	rm -f ./*.html
	
.PHONY : test

test :
	@echo $(SLIDES_HTML)
