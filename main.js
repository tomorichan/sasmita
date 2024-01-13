var disqus_config = function () {
    this.page.url = 'a unique URL for each page where Disqus is present';
    this.page.identifier = 'a unique identifier for each page where Disqus is present';
    this.page.title = 'a unique title for each page where Disqus is present';
};

(function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
    var d = document, s = d.createElement('script');
    
    s.src = '//EXAMPLE.disqus.com/embed.js';  // IMPORTANT: Replace EXAMPLE with your forum shortname!
    
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();

Please enable JavaScript to view the comments powered by Disqus.