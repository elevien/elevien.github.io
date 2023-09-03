---
layout: default
logo: /assets/img/contour.png
---

# Blog


<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{post.title}}  {{post.date}}</a>
    </li>
  {% endfor %}
</ul>
