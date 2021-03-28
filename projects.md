---
layout: base
title: Projects
permalink: /projects/
---
## Projects
The projects that I have worked on span many different topics and use a wide range of technologies.

### Locus Tempus
{% include image.html filename="locus-tempus.png" caption="The user interface of Locus Tempus" %}
[Site]( https://locustempus.ctl.columbia.edu ) \| [Repository](https://github.com/ccnmtl/locustempus)

I am the lead developer of Locus Tempus, a plaform for any instructor at
Columbia Univiersity to create map-based assignments for thier students. The
site is built with Python and Django as well as TypeScript and React for the
mapping environments. It integrates with Columbia's learning management system
via LTI to authenticate users and route them to their course spaces. It uses Mapbox and
DeckGL, a WebGL-powered framework for visualizing data layers on maps.

### Fernande Brielh Decruck
{% include image.html filename="fbd.png" caption="The homepage for Fernande Breilh Decruck" %}
[Site]( https://fernandedecruck.com ) \| [Site (FR)]( https://fernandedecruck.fr ) \| [Repository](https://github.com/nbuonin/decruck-wagtail)

The site for Fernande Brielh Decruck is a multi-lingual Django site build using
the [Wagtail CMS](https://wagtail.io/) framework. The site features a faceted
search interface for the catalog of Decruck's works. It also includes a
custom-build storefront for selling musical scores, with payments handled via
an integration with PayPal.


### Stats Interactives
{% include image.html filename="stats-interactives.png" caption="A simulation of the linear regression model." %}
[Site]( https://stats-interactives.ctl.columbia.edu ) \| [Repository](https://github.com/ccnmtl/stats-interactives)

Stats Interactives is a single page React application that simulates various
statistic theorems, built for graduate students in the School of International
and Public Affairs. Because the users are not math or science majors, a key
objective of this project was to build an engaging experience, and yet not
gloss over important details of the theorems.

### Eureka
{% include image.html filename="eureka.png" caption="A photo of a Bach cello suite provided the perfect cover image for Eureka's homepage" %}
[Site]( https://eureka.ctl.columbia.edu ) \| [Repository](https://github.com/ccnmtl/eureka)

Eureka is a digital guidebook for using improvisation in the ear training
classroom. It was built using Django and Wagtail CMS. The scope of the content
was the largest challenge with this site. To facilitate the content entry, I
wrote a management command to scaffold approximately 300 pages for for the
content editors.

### Project OHCOE
{% include image.html filename="ohcoe.png" caption="SVG hearts were used to show a student's progress" %}
[Site]( https://ohcoe.ctl.columbia.edu ) \| [Repository](https://github.com/ccnmtl/ohcoe)

Project OHCOE is a site that teaches dental students how to intervene if they
suspect that thier patients have an opiod problem. I built this project with
Hugo, a static site generator written in Go. It also features a number of
assessments written in JavaScript, as well as custom Google Analytic events to
capture video analytics.

### Tensor Flock
[Repository](https://github.com/laurenarnett/TensorFlock)

TensorFlock is a class project from 2018. Working among a team of four, we
designed a language that would typecheck the size of tensors at compile time,
and implemented a compiler for it in OCaml. My contributions to the project
consisted of writing the testing framework, running a continuous integration
server, and implemting the lambda lifter.

### Chelsea Symphony
{% include image.html filename="tcs.png" caption="The Chelsea Symphony" %}
[Site]( https://chelseasymphony.org ) \| [Repository](https://github.com/nbuonin/chelsea-symphony)

I have build two generations of websites for The Chelsea Symphony. The first
version was a Drupal 7 site. A few years later, I migrated the site to Wagtail
CMS in order to give the content editors a better experience. Key to this
migration was a migration management command I wrote to read data off of an API
endpoint on the Drupal site. Working in Django also gave me the opportunity to
correctly model the data, which facilitated a more flexible editing experience.
