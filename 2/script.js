console.log('inicio...');

$(document).ready(function () {
  console.log('traer pokemones');

  const urlPokemons = 'https://pokeapi.co/api/v2/pokemon/';
  console.log('URL => ' + urlPokemons);

  getPokemons(urlPokemons);

  $('#getMorePokemons').click(function () {
    const urlNext = $(this).attr('nextPageUrl');
    getPokemons(urlNext);
  });
});

const getPhoto = (url, name) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      $(`#img_${name}`).attr(
        'src',
        data.sprites.other.dream_world.front_default
      );
    });
};

const getPokemons = (url) => {
  console.log('obteniendo pokemones desde ' + url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const pokemons = data.results;
      const urlMorePokemons = data.next;

      $('#getMorePokemons').attr('nextPageUrl', urlMorePokemons);
      pokemons.forEach(function (pokemon) {
        showPokemon(pokemon);
      });

      $('.btnGetDataPokemon').click(function () {
        const urlPokemon = $(this).attr('data-url-pokemon');
        getPokemonData(urlPokemon);
      });
    });
};

// Modal Codes
//Damage
const getDamage = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      $('#modalPokemonDamageRelationLabel').text(data.name);

      assignDamage(
        data.damage_relations.double_damage_from,
        'double_damage_from'
      );
      assignDamage(data.damage_relations.double_damage_to, 'double_damage_to');
      assignDamage(data.damage_relations.half_damage_from, 'half_damage_from');
      assignDamage(data.damage_relations.half_damage_to, 'half_damage_to');
      assignDamage(data.damage_relations.no_damage_from, 'no_damage_from');
      assignDamage(data.damage_relations.no_damage_to, 'no_damage_to');
    })
    .then(() => {
      $('#modalPokemonDamageRelation').modal('show');
    });
};
// otherPokemons
const getOthers = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      $('#modalGetOtherPokemonsLabel').text(data.name);
      $('#other-pokemons').text('');

      data.pokemon.forEach(function(p){
        $('#other-pokemons').append(`<li class="">${p.pokemon.name}</li>`);
      })
    })
    .then(() => {
      $('#modalGetOtherPokemons').modal('show');
    });
};


const assignDamage = (damageArray, divId) => {
  $('#' + divId).text('');
  damageArray.forEach(function (damage) {
    $('#' + divId).append(`<li class="">${damage.name}</li>`);
  });
};
const getPokemonData = (url) => {
  console.log('obteniendo datos de ' + url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      $('#modalPokemonLabel').text(data.name);

      console.log('PokemonData', data);

      $('#pokemonType').text('');
      $('#pokemonGenerations').text('');
      $('#pokemonAbilities').text('');
      $('#pokemonMoves').text('');

      data.types.forEach(function (type) {
        $('#pokemonType').append(`
          <li class="">${type.type.name} 
          <button type="button" class="btn btn-success btnDamageRelation" data-url-damage="${type.type.url}">
          Ver relaciones de daño
          </button></li>
          `);
      });

      $('.btnDamageRelation').click(function () {
        const urlDamage = $(this).attr('data-url-damage');
        getDamage(urlDamage);
      });

      data.game_indices.forEach(function (generation) {
        $('#pokemonGenerations').append(
          `<li class="">${generation.version.name}</li>`
        );
      });

      data.abilities.forEach(function (ability) {
        $('#pokemonAbilities').append(
          `<li class="">${ability.ability.name}
            <button type="button" class="btn btn-warning btnOtherPokemons" data-url-other-pokemons="${ability.ability.url}">
            ver otros pokemones
            </button>
          </li>`
        );
      });


      $('.btnOtherPokemons').click(function () {
        const urlOtherPoke = $(this).attr('data-url-other-pokemons');
        getOthers(urlOtherPoke);
      });

      for (let i = 0; i < 5; i++) {
        $('#pokemonMoves').append(
          `<li class="">${data.moves[i].move.name}</li>`
        );
      }

      $('#modalPokemon').modal('show');
    });
};

const showPokemon = (pokemon) => {
  $('#pokedex').append(`
    <div class="card col-3">
        <div class="card-body">
            <h5 class="card-title">${pokemon.name}</h5>
            <img src="" id="img_${pokemon.name}" class="w-100">
            <button class="btn btn-primary btnGetDataPokemon" data-url-pokemon="${pokemon.url}">¡Quiero saber más de este pokémon!</button>
        </div>
    </div>
    `);
  getPhoto(pokemon.url, pokemon.name);
};
                           console.log('inicio...');

$(document).ready(function () {
  console.log('traer pokemones');

  const urlPokemons = 'https://pokeapi.co/api/v2/pokemon/';
  console.log('URL => ' + urlPokemons);

  getPokemons(urlPokemons);

  $('#getMorePokemons').click(function () {
    const urlNext = $(this).attr('nextPageUrl');
    getPokemons(urlNext);
  });
});

const getPhoto = (url, name) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      $(`#img_${name}`).attr(
        'src',
        data.sprites.other.dream_world.front_default
      );
    });
};

const getPokemons = (url) => {
  console.log('obteniendo pokemones desde ' + url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const pokemons = data.results;
      const urlMorePokemons = data.next;

      $('#getMorePokemons').attr('nextPageUrl', urlMorePokemons);
      pokemons.forEach(function (pokemon) {
        showPokemon(pokemon);
      });

      $('.btnGetDataPokemon').click(function () {
        const urlPokemon = $(this).attr('data-url-pokemon');
        getPokemonData(urlPokemon);
      });
    });
};

// Modal Codes
//Damage
const getDamage = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      $('#modalPokemonDamageRelationLabel').text(data.name);

      assignDamage(
        data.damage_relations.double_damage_from,
        'double_damage_from'
      );
      assignDamage(data.damage_relations.double_damage_to, 'double_damage_to');
      assignDamage(data.damage_relations.half_damage_from, 'half_damage_from');
      assignDamage(data.damage_relations.half_damage_to, 'half_damage_to');
      assignDamage(data.damage_relations.no_damage_from, 'no_damage_from');
      assignDamage(data.damage_relations.no_damage_to, 'no_damage_to');
    })
    .then(() => {
      $('#modalPokemonDamageRelation').modal('show');
    });
};
// otherPokemons
const getOthers = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      $('#modalGetOtherPokemonsLabel').text(data.name);
      $('#other-pokemons').text('');

      data.pokemon.forEach(function(p){
        $('#other-pokemons').append(`<li class="">${p.pokemon.name}</li>`);
      })
    })
    .then(() => {
      $('#modalGetOtherPokemons').modal('show');
    });
};


const assignDamage = (damageArray, divId) => {
  $('#' + divId).text('');
  damageArray.forEach(function (damage) {
    $('#' + divId).append(`<li class="">${damage.name}</li>`);
  });
};
const getPokemonData = (url) => {
  console.log('obteniendo datos de ' + url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      $('#modalPokemonLabel').text(data.name);

      console.log('PokemonData', data);

      $('#pokemonType').text('');
      $('#pokemonGenerations').text('');
      $('#pokemonAbilities').text('');
      $('#pokemonMoves').text('');

      data.types.forEach(function (type) {
        $('#pokemonType').append(`
          <li class="">${type.type.name} 
          <button type="button" class="btn btn-success btnDamageRelation" data-url-damage="${type.type.url}">
          Ver relaciones de daño
          </button></li>
          `);
      });

      $('.btnDamageRelation').click(function () {
        const urlDamage = $(this).attr('data-url-damage');
        getDamage(urlDamage);
      });

      data.game_indices.forEach(function (generation) {
        $('#pokemonGenerations').append(
          `<li class="">${generation.version.name}</li>`
        );
      });

      data.abilities.forEach(function (ability) {
        $('#pokemonAbilities').append(
          `<li class="">${ability.ability.name}
            <button type="button" class="btn btn-warning btnOtherPokemons" data-url-other-pokemons="${ability.ability.url}">
            ver otros pokemones
            </button>
          </li>`
        );
      });


      $('.btnOtherPokemons').click(function () {
        const urlOtherPoke = $(this).attr('data-url-other-pokemons');
        getOthers(urlOtherPoke);
      });

      for (let i = 0; i < 5; i++) {
        $('#pokemonMoves').append(
          `<li class="">${data.moves[i].move.name}</li>`
        );
      }

      $('#modalPokemon').modal('show');
    });
};

const showPokemon = (pokemon) => {
  $('#pokedex').append(`
    <div class="card col-3">
        <div class="card-body">
            <h5 class="card-title">${pokemon.name}</h5>
            <img src="" id="img_${pokemon.name}" class="w-100">
            <button class="btn btn-primary btnGetDataPokemon" data-url-pokemon="${pokemon.url}">¡Quiero saber más de este pokémon!</button>
        </div>
    </div>
    `);
  getPhoto(pokemon.url, pokemon.name);
};
