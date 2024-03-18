import React from "react";
import Card from "../Card/Card";
import './styles.css'

const data =[
    {"id":1,"common_name":"Tayra","scientific_name":"Eira barbata"},
    {"id":2,"common_name":"Prairie falcon","scientific_name":"Falco mexicanus"},
    {"id":3,"common_name":"Cape Barren goose","scientific_name":"Cereopsis novaehollandiae"},
    {"id":4,"common_name":"Owl, great horned","scientific_name":"Bubo virginianus"},
    {"id":5,"common_name":"Asian lion","scientific_name":"Panthera leo persica"},
    {"id":6,"common_name":"Vicuna","scientific_name":"Vicugna vicugna"},
    {"id":7,"common_name":"Timber wolf","scientific_name":"Canis lupus lycaon"},
    {"id":8,"common_name":"Secretary bird","scientific_name":"Sagittarius serpentarius"},
    {"id":9,"common_name":"Madagascar hawk owl","scientific_name":"Ninox superciliaris"},
    {"id":10,"common_name":"Quail, gambel's","scientific_name":"Callipepla gambelii"},
    {"id":11,"common_name":"Bear, grizzly","scientific_name":"Ursus arctos"},
    {"id":12,"common_name":"White-mantled colobus","scientific_name":"Colobus guerza"},
    {"id":13,"common_name":"Francolin, coqui","scientific_name":"Francolinus coqui"},
    {"id":14,"common_name":"Glossy starling (unidentified)","scientific_name":"Lamprotornis sp."},
    {"id":15,"common_name":"Asian water dragon","scientific_name":"Physignathus cocincinus"},
    {"id":16,"common_name":"Monster, gila","scientific_name":"Heloderma horridum"},
    {"id":17,"common_name":"Arctic tern","scientific_name":"Sterna paradisaea"},
    {"id":18,"common_name":"Crested barbet","scientific_name":"Trachyphonus vaillantii"},
    {"id":19,"common_name":"Mountain goat","scientific_name":"Oreamnos americanus"},
    {"id":20,"common_name":"Monkey, vervet","scientific_name":"Cercopithecus aethiops"},
    {"id":21,"common_name":"Red-cheeked cordon bleu","scientific_name":"Uraeginthus bengalus"},
    {"id":22,"common_name":"Blue-faced booby","scientific_name":"Sula dactylatra"},
    {"id":23,"common_name":"Duck, mountain","scientific_name":"Hymenolaimus malacorhynchus"},
    {"id":24,"common_name":"Capuchin, white-fronted","scientific_name":"Cebus albifrons"},
    {"id":25,"common_name":"Dove, rock","scientific_name":"Columba livia"},
    {"id":26,"common_name":"Sloth, two-toed tree","scientific_name":"Choloepus hoffmani"},
    {"id":27,"common_name":"Otter, canadian river","scientific_name":"Lutra canadensis"},
    {"id":28,"common_name":"Egret, cattle","scientific_name":"Bubulcus ibis"},
    {"id":29,"common_name":"Jackal, black-backed","scientific_name":"Canis mesomelas"},
    {"id":30,"common_name":"Red-tailed phascogale","scientific_name":"Phascogale calura"}
]

function Cards(){
    return(
        <section className="cards--container">
            {
                data.map((elm, idx)=> <Card info={elm} />)
            }

        </section>
    )
}

export default Cards