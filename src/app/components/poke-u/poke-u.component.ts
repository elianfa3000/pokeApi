import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-poke-u',
  templateUrl: './poke-u.component.html',
  styleUrls: ['./poke-u.component.scss']
})
export class PokeUComponent {

  pokemon!: string | null;
  pokeResult: any;

  typeOne: any
  typeTwo: any

  typeOnec: any
  typeTwoc: any



  typeColors: any = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    fairy: '#cf87c2',
    dark: '#8b8b8b'
  };

  constructor(private http: HttpClient) {

  }



  ngOnInit() {


  }

  rotate() {
    const miBoton = document.querySelector("#pokeball") as HTMLElement;
    miBoton.classList.add('animation');


    setTimeout(() => {
      miBoton.classList.remove('animation');
    }, 2000);
  }

  searchPoke(): any {

    /* const pokeName = document.querySelector("#name") as HTMLElement;
     const pokeImg = document.querySelector("#pokeImg") as HTMLElement;
     const pokeNumID = document.querySelector("#numID") as HTMLElement;*/

    this.typeOne = null
    this.typeTwo = null
    this.typeOnec = null
    this.typeTwoc = null
    if (!this.pokemon) {

      this.pokemon = null;
      this.pokeResult = null;

    } else {

      this.http.get<any[]>(`https://pokeapi.co/api/v2/pokemon/${this.pokemon.toLowerCase()}`).subscribe(
        (res) => {
          this.pokeResult = res
          console.log(this.pokeResult)
          /* pokeName.textContent = this.pokeResult.name   pElement.innerHTML = '<b>Nuevo contenido en negrita</b>';*/
          /*pokeImg.setAttribute('src', this.pokeResult.sprites.front_default);*/
          /*pokeNumID.textContent = `Nº ${this.pokeResult.id}`;*/




          for (const tipo in this.typeColors) {
            if (tipo === this.pokeResult.types[0].type.name) {
              this.typeOne = tipo;

              /*  pokeImg.style.background = `${this.typeColors[this.typeOne]}`;*/
              this.typeOnec = `${this.typeColors[this.typeOne]}`
            }
          }
          if (this.pokeResult.types.length > 1) {
            for (const tipo in this.typeColors) {
              if (tipo === this.pokeResult.types[1].type.name) {

                this.typeTwo = tipo;

                /*pokeImg.style.background = `radial-gradient(${this.typeColors[this.typeOne]} 33%, ${this.typeColors[this.typeTwo]} 33%)`;
                pokeImg.style.backgroundSize = `10px 1px`;*/
                this.typeTwoc = `${this.typeColors[this.typeTwo]}`
              }
            }
          }
        },

        (err: any) => {
          console.log(err)

        }
      )
    }



  }




}
