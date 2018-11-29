
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drivers').del()
    .then(function () {
      // Inserts seed entries
      return knex('drivers').insert([
        {name: 'Dan Dan', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoicyAcKGsbuDY-UsD0dGqxRFcW5hsoStjDUAjY5DB2alZYwm-vg', bossman: 3},
        {
          name: 'Ron Burgandy',
          img_url: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi-zsLltfjeAhVHeKwKHV-nANIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.charactour.com%2Fhub%2Fcharacters%2Fview%2FRon-Burgundy.Anchorman-The-Legend-of-Ron-Burgundy&psig=AOvVaw00wiewjMEjlDaNb3yjfRa2&ust=1543540238344059',
          bossman: 3
        },
        {
          name: 'Andys Toy',
          img_url: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj0zL_VtvjeAhUMcq0KHfBdDGYQjRx6BAgBEAU&url=https%3A%2F%2Ftoystory.disney.com%2Fsheriff-woody&psig=AOvVaw2EhkrptwrcqC_hRa9oc_er&ust=1543540346087039', bossman: 3
        },
      ]);
    });
};
