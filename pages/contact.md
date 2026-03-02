---
layout: default
permalink: /contact
navbar-index: 4
title: Contact
---

<form action="https://formspree.io/f/mvzbjzdl" method="POST" class="contact-form">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required placeholder="Your name">
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required placeholder="your@email.com">
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required placeholder="Your message"></textarea>
  </div>
  <button type="submit" class="form-submit">Send</button>
</form>
