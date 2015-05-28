var posts = [
  { id: 1, title: 'this is my title', body: 'Cras nulla ipsum, consectetur eu posuere eget, maximus non tellus. Nunc ornare vehicula metus id dignissim. Donec bibendum justo vitae vehicula varius. Morbi in libero vel eros porttitor maximus. Donec hendrerit dapibus metus vitae mattis. Cras id nibh lectus. Sed tempor lorem justo, ac consequat nisl fringilla laoreet. Sed in velit erat. Aliquam convallis nulla et tempor varius. Phasellus pulvinar elementum eleifend. Quisque eu posuere magna. Sed ultrices venenatis lectus, vel consectetur odio vulputate nec. Duis egestas, ipsum vitae bibendum mattis, magna sapien dapibus odio, nec lobortis ex justo vel metus. Nulla eget elit tincidunt, posuere massa a, euismod risus. Duis lectus sem, molestie a nibh et, tristique lacinia lectus. Sed at diam in turpis mollis ullamcorper. Etiam dignissim sapien sed justo tempus facilisis. Donec enim nisi, fermentum eu lobortis quis, fringilla vel magna. Praesent ut lobortis nunc. Praesent lacinia at nisi at mollis. Aenean augue ex, mattis sed efficitur vel, pulvinar sed ante. Pellentesque mollis risus at felis pellentesque luctus. Integer risus mi, vestibulum nec rhoncus fermentum, posuere non ipsum. Donec turpis quam, pharetra nec ornare ac, commodo quis mauris. Quisque sollicitudin ut ex eget bibendum. Praesent vestibulum posuere auctor. Curabitur ultrices cursus sem, nec euismod ex rhoncus id. Donec vestibulum mi consectetur velit scelerisque, sit amet ultricies erat sollicitudin. Sed a finibus leo, quis auctor magna. Aliquam mauris nibh, mattis commodo magna sit amet, porta gravida orci. Sed iaculis sapien id laoreet egestas. Duis leo lorem, dapibus et convallis non, fringilla sed nisi. Quisque a risus quis est molestie laoreet consectetur et libero. Aenean mollis viverra urna, vitae euismod nisl consequat quis.' },
  { id: 2, title: 'this is my title', body: 'Cras nulla ipsum, consectetur eu posuere eget, maximus non tellus. Nunc ornare vehicula metus id dignissim. Donec bibendum justo vitae vehicula varius. Morbi in libero vel eros porttitor maximus. Donec hendrerit dapibus metus vitae mattis. Cras id nibh lectus. Sed tempor lorem justo, ac consequat nisl fringilla laoreet. Sed in velit erat. Aliquam convallis nulla et tempor varius. Phasellus pulvinar elementum eleifend. Quisque eu posuere magna. Sed ultrices venenatis lectus, vel consectetur odio vulputate nec. Duis egestas, ipsum vitae bibendum mattis, magna sapien dapibus odio, nec lobortis ex justo vel metus. Nulla eget elit tincidunt, posuere massa a, euismod risus. Duis lectus sem, molestie a nibh et, tristique lacinia lectus. Sed at diam in turpis mollis ullamcorper. Etiam dignissim sapien sed justo tempus facilisis. Donec enim nisi, fermentum eu lobortis quis, fringilla vel magna. Praesent ut lobortis nunc. Praesent lacinia at nisi at mollis. Aenean augue ex, mattis sed efficitur vel, pulvinar sed ante. Pellentesque mollis risus at felis pellentesque luctus. Integer risus mi, vestibulum nec rhoncus fermentum, posuere non ipsum. Donec turpis quam, pharetra nec ornare ac, commodo quis mauris. Quisque sollicitudin ut ex eget bibendum. Praesent vestibulum posuere auctor. Curabitur ultrices cursus sem, nec euismod ex rhoncus id. Donec vestibulum mi consectetur velit scelerisque, sit amet ultricies erat sollicitudin. Sed a finibus leo, quis auctor magna. Aliquam mauris nibh, mattis commodo magna sit amet, porta gravida orci. Sed iaculis sapien id laoreet egestas. Duis leo lorem, dapibus et convallis non, fringilla sed nisi. Quisque a risus quis est molestie laoreet consectetur et libero. Aenean mollis viverra urna, vitae euismod nisl consequat quis.' },
  { id: 3, title: 'this is my title', body: 'Cras nulla ipsum, consectetur eu posuere eget, maximus non tellus. Nunc ornare vehicula metus id dignissim. Donec bibendum justo vitae vehicula varius. Morbi in libero vel eros porttitor maximus. Donec hendrerit dapibus metus vitae mattis. Cras id nibh lectus. Sed tempor lorem justo, ac consequat nisl fringilla laoreet. Sed in velit erat. Aliquam convallis nulla et tempor varius. Phasellus pulvinar elementum eleifend. Quisque eu posuere magna. Sed ultrices venenatis lectus, vel consectetur odio vulputate nec. Duis egestas, ipsum vitae bibendum mattis, magna sapien dapibus odio, nec lobortis ex justo vel metus. Nulla eget elit tincidunt, posuere massa a, euismod risus. Duis lectus sem, molestie a nibh et, tristique lacinia lectus. Sed at diam in turpis mollis ullamcorper. Etiam dignissim sapien sed justo tempus facilisis. Donec enim nisi, fermentum eu lobortis quis, fringilla vel magna. Praesent ut lobortis nunc. Praesent lacinia at nisi at mollis. Aenean augue ex, mattis sed efficitur vel, pulvinar sed ante. Pellentesque mollis risus at felis pellentesque luctus. Integer risus mi, vestibulum nec rhoncus fermentum, posuere non ipsum. Donec turpis quam, pharetra nec ornare ac, commodo quis mauris. Quisque sollicitudin ut ex eget bibendum. Praesent vestibulum posuere auctor. Curabitur ultrices cursus sem, nec euismod ex rhoncus id. Donec vestibulum mi consectetur velit scelerisque, sit amet ultricies erat sollicitudin. Sed a finibus leo, quis auctor magna. Aliquam mauris nibh, mattis commodo magna sit amet, porta gravida orci. Sed iaculis sapien id laoreet egestas. Duis leo lorem, dapibus et convallis non, fringilla sed nisi. Quisque a risus quis est molestie laoreet consectetur et libero. Aenean mollis viverra urna, vitae euismod nisl consequat quis.' },
];

module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': posts
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': posts[req.params.id - 1]
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
