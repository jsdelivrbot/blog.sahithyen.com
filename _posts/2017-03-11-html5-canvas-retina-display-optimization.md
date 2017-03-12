---
layout: post
title:  "HTML5 Canvas: Optimierung für Retina Displays"
category: "Webentwicklung"
hero_image: macbook_retina.jpg
german_date: 3. März 2017
---
<span class="dropcap">S</span>obald man einmal Apple’s Retina Display genutzt hat, will man nicht zurück zu den normalen Displays. Damit auch die Canvas-Elemente in HTML5 auf diesen Displays gut aussehen, muss man jedoch einige Vorkehrungen treffen. In diesem Beitrag zeige ich, wie man das erreicht.

Retina Displays haben eine grössere Pixel-Dichte, womit sie mehr Details darstellen können. Um mehr über Retina Displays zu erfahren, verweise ich auf diesen guten Beitrag von techfacts.de:

{% include outside_a.html url="http://www.techfacts.de/ratgeber/was-ist-ein-retina-display" text="Was ist ein Retina Display?" %}

Unten sind zwei Links, die auf ein nicht optimiertes Canvas-Element und ein optimiertes Canvas-Element verweisen. Um den Unterschied zu sehen, braucht man jedoch ein Retina-Display.

* {% include outside_a.html url="https://jnicol.github.io/particleground/" text="Nicht optimiertes HTML5-Canvas" %}
* {% include outside_a.html url="https://sahithyen.github.io/particleground/" text="Optimiertes HTML5-Canvas" %}

Um diese Verbesserungen auch auf seiner eigenen Canvas umzusetzen, kann man den unteren Code verwenden.

<script src="https://gist.github.com/sahithyen/43f373437b72aa77a48b0502d6f9806b.js"></script>
