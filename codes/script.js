let cancionActual = { nombre: '', letra: '' }; // Variable global para almacenar la canción actual

// Función para cargar la canción y mostrar su letra cuando el usuario hace clic
function cargarCancion(nombre, letra) {
    // Asignamos la nueva canción a la variable global
    cancionActual = { nombre, letra };

    // Verificamos si ya se ha mostrado la letra para esta canción
    if (!localStorage.getItem(`letraMostrada_${nombre}`)) {
        // Si la letra no ha sido mostrada antes, la mostramos
        mostrarLetra(nombre, letra);
        // Marcar que la letra de esta canción ya ha sido mostrada
        localStorage.setItem(`letraMostrada_${nombre}`, 'true');
    } else {
        // Si ya fue mostrada, puedes mostrar un mensaje o simplemente no hacer nada
        console.log('La letra de esta canción ya fue mostrada.');
    }
}

// Función para mostrar la letra de la canción
function mostrarLetra(nombreCancion, letra) {
    const letraCancion = document.getElementById('letra-cancion');
    const ventanaLetra = document.getElementById('ventana-letra');

    // Verificamos que nombreCancion y letra tengan valores
    if (nombreCancion && letra) {
        letraCancion.textContent = `Letra de ${nombreCancion}:\n\n${letra}`;
        letraCancion.classList.add('mostrar'); // Activar la animación
        letraCancion.style.display = 'block';

        // Mostrar la ventana de la letra
        ventanaLetra.style.display = 'flex'; // Mostrar la ventana lateral
    } else {
        console.log('No se ha recibido correctamente la letra o el nombre de la canción.');
    }
}

// Función para cerrar la ventana lateral de la letra
function cerrarLetra() {
    const ventanaLetra = document.getElementById('ventana-letra');
    ventanaLetra.style.display = 'none'; // Ocultar la ventana lateral
}




// Función para mostrar las canciones de un álbum
function mostrarCanciones(album) {
    let canciones = {
        'House Of Balloons (2011)': [
            { nombre: 'High for This', archivo: 'high_for_this.mp3', letra: 'lllllllllllllllllllll' },
            { nombre: 'What You Need', archivo: 'what_you_need.mp3' },
            { nombre: 'Down Low', archivo: 'down_low.mp3' },
            { nombre: 'The Morning', archivo: 'the_morning.mp3' },
            { nombre: 'Phantom Regret', archivo: 'phantom_regret.mp3' },
            { nombre: 'The Party & The After Party', archivo: 'the_party_the_after_party.mp3' },
            { nombre: 'Coming Down', archivo: 'coming_down.mp3' },
            { nombre: 'Loft Music', archivo: 'loft_music.mp3' },
            { nombre: 'The Knowing', archivo: 'the_knowing.mp3' }
        ],
        'Kiss Land (2013)': [
            { nombre: 'Professional', archivo: 'professional.mp3' },
            { nombre: 'The Town', archivo: 'the_town.mp3' },
            { nombre: 'Adaptation', archivo: 'adaptation.mp3' },
            { nombre: 'Love in the Sky', archivo: 'love_in_the_sky.mp3' },
            { nombre: 'Belong to the World', archivo: 'belong_to_the_world.mp3' },
            { nombre: 'Live For', archivo: 'live_for.mp3' },
            { nombre: 'Wanderlust', archivo: 'wanderlust.mp3' },
            { nombre: 'Kiss Land', archivo: 'kiss_land.mp3' },
            { nombre: 'Pretty', archivo: 'pretty.mp3' },
            { nombre: 'Tears in the Rain', archivo: 'tears_in_the_rain.mp3' },
            { nombre: 'Wanderlust (Remix)', archivo: 'wanderlust_remix.mp3' }
        ],
        'Beauty Behind the Madness (2015)': [
            { nombre: 'Real Life', archivo: 'real_life.mp3' },
            { nombre: 'Losers', archivo: 'losers.mp3' },
            { nombre: 'Tell Your Friends', archivo: 'tell_your_friends.mp3' },
            { nombre: 'Often', archivo: 'often.mp3' },
            { nombre: 'The Hills', archivo: 'the_hills.mp3' },
            { nombre: 'Acquainted', archivo: 'acquainted.mp3' },
            { nombre: 'Can\'t Feel My Face', archivo: 'cant_feel_my_face.mp3' },
            { nombre: 'Shameless', archivo: 'shameless.mp3' },
            { nombre: 'Earned It', archivo: 'earned_it.mp3' },
            { nombre: 'In the Night', archivo: 'in_the_night.mp3' },
            { nombre: 'As You Are', archivo: 'as_you_are.mp3' },
            { nombre: 'Dark Times', archivo: 'dark_times.mp3' },
            { nombre: 'Prisoner', archivo: 'prisoner.mp3' },
            { nombre: 'Angel', archivo: 'angel.mp3' },
            { nombre: 'Beauty Behind the Madness', archivo: 'beauty_behind_the_madness.mp3' }
        ],
        'Starboy (2016)': [
            { nombre: 'Starboy', archivo: 'starboy.mp3' },
            { nombre: 'Party Monster', archivo: 'party_monster.mp3' },
            { nombre: 'False Alarm', archivo: 'false_alarm.mp3' },
            { nombre: 'Reminder', archivo: 'reminder.mp3' },
            { nombre: 'Rockin\'', archivo: 'rockin.mp3' },
            { nombre: 'Secrets', archivo: 'secrets.mp3' },
            { nombre: 'True Colors', archivo: 'true_colors.mp3' },
            { nombre: 'Sidewalks', archivo: 'sidewalks.mp3' },
            { nombre: 'Six Feet Under', archivo: 'six_feet_under.mp3' },
            { nombre: 'Love to Lay', archivo: 'love_to_lay.mp3' },
            { nombre: 'A Lonely Night', archivo: 'a_lonely_night.mp3' },
            { nombre: 'Attention', archivo: 'attention.mp3' },
            { nombre: 'Ordinary Life', archivo: 'ordinary_life.mp3' },
            { nombre: 'Nothing Without You', archivo: 'nothing_without_you.mp3' },
            { nombre: 'All I Know', archivo: 'all_i_know.mp3' },
            { nombre: 'Die for You', archivo: 'die_for_you.mp3' },
            { nombre: 'I Feel It Coming', archivo: 'i_feel_it_coming.mp3' }
        ],
        'After Hours (2020)': [
            {nombre: 'Alone Again', archivo: '../Canciones/Too-Late.mp3',letra: 'Take off my disguise Im living someone elses life Suppressing who I was inside So I throw two-thousand ones in the sky Together were alone (together were alone) In Vegas I feel so at home (in Vegas I feel at home) Falling only for the night So I throw two-thousand ones in the sky (the sky) How, how much to light up my star again And rewire all my thoughts? Oh baby, wont you remind me what I am? And break, break my little cold heart Call me up and Ill send for you Take me down to your altitude I dont know if I can be alone again I dont know if I can sleep alone again (alone again) Check my pulse for a second time second time I took too much, I dont wanna die I dont know if I can be alone again I dont know if I can sleep alone again Count it up, its all for you, count it up Count it up, its all for you, count it up Cause I dont know if I can be alone again I dont know if I can be alone again (alone again)' },
            { nombre: 'Too Late', archivo: '/Canciones/Too-Late.mp3',letra:'No-no, no-no, no-no-no I let you down, I led you on I never thought I d be here without you Don t let me drown inside your arms Bad thoughts inside my mind When the darkness comes, you re my light, baby My light, baby, my light when it s dark, yeah I m too high, baby, too high, baby Cause I know right now, that I lost it (hey) It s way too late to save our souls, baby (oh, oh, yeah) It s way too late, we re on our own (baby, on my own) I made mistakes, I did you wrong, baby (oh, oh, yeah) It s way too late to save my I can t trust (I can t trust) where I live (where I live) Anymore (anymore, anymore, anymore) Sources say that we re done, how would they know? (cause they know, cause they know) We re in hell, it s disguised as a paradise with flashing lights I just wanna believe there s so much more (hey, woo, hey, woo, hey) It s way too late to save our souls, baby (oh, oh, yeah) It s way too late, we re on our own (baby, on my own) I made mistakes, I did you wrong, baby (oh, oh, yeah) It s way too late to save my And, ooh, I tell myself I should get over you I said ooh, I know I d rather be all over you I m trying, trying, but I, I just want your body Ridin slow on top of me, girl, on top of me I want you, babe, ooh-ooh It s way too late (late) to save our souls Baby (souls, baby, oh, oh, oh-oh-oh) It s way too late, we re on our own (baby, on my own) I made mistakes (mistakes), I did you wrong, baby'},
            { nombre: 'Hardest to Love', archivo: '/Canciones/Hardest-To-Love.mp3',letra:'Oh, yeah Oh, yeah Yeah You try with me so many times, yeah You re cryin out behind the smiles And I can see right through the lies Yeah, yeah, yeah, yeah, yeah And what we had is dead inside, yeah You re actin like it s still alive And you still wanna make it right, yeah I know But I ve been the hardest to love You re tryna let me go, yeah And I can see it, I can see it I ve been the hardest to love It s hard to let me go, yeah And I can feel it, I can feel it (oh, yeah) I don t feel it anymore (yeah) The house I bought is not a home (no) Together we are so alone Yeah, yeah, yeah, yeah, yeah (oh, babe) Don t regret the day we met (we met) Don t forget that time we spent (we spent) Forget that we re in different beds I know Cause I ve been the hardest to love You re tryna let me go, yeah And I can see it, I can see it I ve been the hardest to love It s hard to let me go, yeah And I can feel it, I can feel it I can t, can t believe you want me After all the heartbreaks, after all I ve done, oh-oh-oh (oh, oh, oh) No, I can t, can t believe you trust me (trust me) After all the rough days, you still call me up (me up), oh-oh-oh Cause I ve been the hardest to love You re tryna let me go (tryna let me go), yeah (oh) And I can see it, I can see it (I can see it) I ve been the hardest to love (love, babe) You re tryna let me go, yeah And I can feel it, I can feel it' },
            { nombre: 'Scared to Live', archivo: '/Canciones/Scared-To-Live.mp3',letra:'When I saw the signs, I should ve let you go But I kept you beside me And if I held you back, at least I held you close Should have known you were lonely I know things will never be the same Time we lost will never be replaced I m the reason you forgot to love So don t be scared to live again Be scared to live again No, don t be scared to live again Be scared to live again You always miss the chance to fall for someone else Cause your heart only knows me They try to win your love, but there was nothing left They just made you feel lonely I am not the man I used to be Did some things I couldn t let you see Refused to be the one who taints your heart So don t be scared to live again Be scared to live again No, don t be scared to live again Be scared to live again I hope you know that I hope you know that I ve been praying that you find yourself I hope you know that I hope you know that We fell apart, right from the start I should have made you my only When it s said and done So don t be scared to live again Be scared to live again I said don t be scared to live again Be scared to live again I hope you know that I hope you know that I ve been praying that you find yourself I hope you know that I hope you know that We fell apart, right from the start' },
            { nombre: 'Snowchild', archivo: '/Canciones/Snowchild.mp3',letra:' I used to pray when I was sixteen If I didnt make it then Id probably make my wrist bleed Not to mislead, turn my nightmares into big dreams Whole squad mobbin even though we only six deep I was singing notes while my niggas played with six keys Walking in the snow before I ever made my wrist freeze I was blowing smoke, had me dizzy like Gillespie Niggas had no homes we were living in the dead streets You couldnt find me like Im Hoffa Cover girls jumping out the page like they pop ups Spending all my money on these niggas that I brought up Taking care of families for my brothers when they locked up And I had nothing to believe in Double cup leanin Couldnt even breathe and For that money I was fiending Cali was the mission but now a nigga leaving Leaving, leaving into the night (into the night, into the night) Now a nigga leaving, leaving Leaving into the night She like my futuristic sounds in the new spaceship Futuristic sex give her Phillip K dick She never need a man, she what a man need (man need) So I keep on falling for her daily (daily) We was at Coachella going brazy Stack a couple Ms like I was Shady (I was Shady) Now Im in Tribeca like Im Jay Z (Jay Z) Rockin Sorayama like he pay me (pay me) I just signed a new deal with Mercedes (Cedes) Got me movin dirty like Im Swayze (Swayze) All my diamonds dancing like they Swayze (Swayze) All my diamonds hitting like they Swae Lee (Swae Lee) Jet so big got a business and a coach Always livin on the road, rockin Louis a la mode, nigga And for that money I been fiending Cali was the mission but now a nigga leaving Leaving, leaving into the night (into the night, into the night) Now a nigga leaving, leaving Leaving into the night, oh Twenty mill mansion, never lived in it (lived in it) Zero edge pool, never dipped in it (dipped in it) Superstar neighbor in my business (in my business, in my business) Paparazzi tryna catch me slippin (slippin) Going on tour is my vacation (my vacation) Every month another accusation (accusation) Only thing Im phobic of is failing (failing) I was never blessed with any patience So a nigga leaving, leaving, leaving into the night Now a nigga leaving, leaving Leaving into the night, oh ' },
            { nombre: 'Blinding Lights', archivo: '/Canciones/The Weeknd - Blinding Lights.mp3',letra:'Here is the text written out as requested, without contractions and in a continuous format: He used to lie awake counting breaths. Each one he used was one less left. Deep in his chest, the hope was gone of him getting out or him moving on. A hopeless song stirred in his head, months at a time, but he could not lie. He could not time and he could not rhyme or express himself to save his life.He would put his favorite records on, Innerparty and Linkin Park. He would close his eyes and he would sing along, but he would never make it on his own. It is not the time and it is not the place to have to eat your words, because it is not the fall and it is not the fail. It is what you do right afterwords. And at these words, I hope you rise, dig in deep and then choose a side. Grab the mic and you will shock them all with your steady hands and wild eyes. Wild fires deep inside, torch them all and leave none alive. If some survive, then tell your friends, a broken watch, a bad time. So here is my match, let us burn them all before the fall of man. It is time to stand or stand for nothing at all. I hope you bury this deep in your mind. It carries on. (It is not like it was before.) It never dies. (So tell me now, what do you stand for?) Before the scars and the secrets you hide, I will burn them all. (It is not like it was.) Your ghosts inside. (So tell me now, what do you stand for?) Not long ago, the darkest place. Shadows live and light escapes. Empty hands and hollow eyes that never give and only take. One mistake you will come to see is how you doubted thoughtlessly, is how you only recognize the person that I used to be. So here is my match, let us burn it up. Take everything you can before you fly. You know you must learn to stand. And I have been there before, their torches in hand. I will steady my feet and learn how to stand. And I will burn alive, but you will know who I am.' },
            { nombre: 'Save Your Tears', archivo: '/Canciones/Save-Your-Tears.mp3' ,letra:'I saw you dancing in a crowded room, you look so happy when I am not with you but then you saw me, caught you by surprise, a single teardrop falling from your eye. I do not know why I run away, I will make you cry when I run away. You could have asked me why I broke your heart, you could have told me that you fell apart, but you walked past me like I was not there and just pretended like you did not care. I do not know why I run away, I will make you cry when I run away. Take me back because I want to stay, save your tears for another, save your tears for another day, save your tears for another day. So, I made you think that I would always stay, I said some things that I should never say, yeah, I broke your heart like someone did to mine, and now you will not love me for a second time. I do not know why I run away, oh, girl. Said, I will make you cry when I run away. Girl, take me back because I want to stay, save your tears for another (uh). I realize that I am much too late and you deserve someone better. Save your tears for another day (oh, yeah). Save your tears for another day (yeah). I do not know why I run away, I will make you cry when I run away. Save your tears for another day, ooh, girl (ah). I said, save your tears for another day (ah). Save your tears for another day (ah). Save your tears for another day (ah)'},
            { nombre: 'After Hours', archivo: '/Canciones/After-Hours.mp3',letra:'Thought I almost died in my dream again baby almost died Fightin for my life I could not breathe again I am fallin in too deep oh Without you do not wanna sleep fallin in Cause my heart belongs to you I will risk it all for you I want you next to me This time I will never leave I want to share babies Protection we will not need Your body next to me Is just a memory I am fallin in too deep oh Without you I can not sleep Insomnia relieve oh Talk to me without you I can not breathe My darkest hours Girl I felt so alone inside of this crowded room Different girls on the floor distracting my thoughts of you I turned into the man I used to be to be Put myself to sleep Just so I can get closer to you inside my dreams Did not wanna wake up unless you were beside me I just wanted to call you and say and say Oh baby where are you now when I need you most I would give it all just to hold you close Sorry that I broke your heart your heart Never comin down uh I was runnin away from facin reality uh Wastin all of my time on livin my fantasies Spendin money to compensate compensate Cause I want you baby I will be livin in Heaven when I am inside of you It was definitely a blessing wakin beside you I will never let you down again again Oh baby where are you now when I need you most I would give it all just to hold you close Sorry that I broke your heart your heart I said baby I will treat you better than I did before I will hold you down and not let you go This time I will not break your heart your heart yeah I know it is all my fault Made you put down your guard I know I made you fall Then said you were wrong for me I lied to you I lied to you I lied to you to you Can not hide the truth I stayed with her in spite of you You did some things that you regret still ride for you Cause this house is not a home Without my baby where are you now when I need you most I gave it all just to hold you close Sorry that I broke your heart your heart And I said baby I will treat you better than I did before I will hold you down and not let you go This time I will not break your heart your heart no' },
            { nombre: 'Until I Bleed Out', archivo: '/Canciones/Until-I-Bleed Out.mp3',letra:'I can not move, I am so paralyzed I am so paralyzed I can not explain why I am terrified I am so terrified Well, I do not want to touch the sky no more I just want to feel the ground when I am coming down It has been way too long And I do not even want to get high no more Just want it out of my life Out of my life, out I want to cut you out of my dreams Til I am bleeding out Til I am bleeding I want to cut you out of my mind Til I am bleeding out Til I am bleeding I want to cut you out of my dreams Whoa, I am bleeding out Girl, I am bleeding I want to cut you out of my mind Cause I am bleeding out Oh, I am bleeding Girl, I am bleeding I keep telling myself I do not need it I keep telling myself I do not need it anymore I keep telling myself I do not need it anymore Need it anymore' }
        ],
        'Dawn FM (2022)': [
            { nombre: 'Dawn FM', archivo: 'dawn_fm.mp3' },
            { nombre: 'Gasoline', archivo: 'gasoline.mp3' },
            { nombre: 'How Do I Make You Love Me?', archivo: 'how_do_i_make_you_love_me.mp3' },
            { nombre: 'Take My Breath', archivo: 'take_my_breath.mp3' },
            { nombre: 'Sacrifice', archivo: 'sacrifice.mp3' },
            { nombre: 'A Tale by Quincy', archivo: 'a_tale_by_quincy.mp3' },
            { nombre: 'Out of Time', archivo: 'out_of_time.mp3' },
            { nombre: 'Here We Go... Again', archivo: 'here_we_go_again.mp3' },
            { nombre: 'Best Friends', archivo: 'best_friends.mp3' },
            { nombre: 'Is There Someone Else?', archivo: 'is_there_someone_else.mp3' },
            { nombre: 'Starry Eyes', archivo: 'starry_eyes.mp3' },
            { nombre: 'Every Angel is Terrifying', archivo: 'every_angel_is_terrifying.mp3' },
            { nombre: 'Don’t Blinding Lights', archivo: 'dont_blinding_lights.mp3' },
            { nombre: 'I Heard You’re Married', archivo: 'i_heard_youre_married.mp3' },
            { nombre: 'More Than a Woman', archivo: 'more_than_a_woman.mp3' },
            { nombre: 'Too Late to Die Young', archivo: 'too_late_to_die_young.mp3' }
        ],
        'Hurry Up Tomorrow (2025)': [
            { nombre: 'Wake Me Up', archivo: 'wake_me_up.mp3' },
            { nombre: 'Cry For Me', archivo: 'cry_for_me.mp3' },
            { nombre: 'I Can\'t Fucking Sing', archivo: 'i_cant_fucking_sing.mp3' },
            { nombre: 'São Paulo', archivo: 'sao_paulo.mp3' },
            { nombre: 'Until We\'re Skin & Bones', archivo: 'until_were_skin_and_bones.mp3' },
            { nombre: 'Baptized In Fear', archivo: 'baptized_in_fear.mp3' },
            { nombre: 'Open Hearts', archivo: 'open_hearts.mp3' },
            { nombre: 'Opening Night', archivo: 'opening_night.mp3' },
            { nombre: 'Reflections Laughing', archivo: 'reflections_laughing.mp3' },
            { nombre: 'Enjoy The Show', archivo: 'enjoy_the_show.mp3' },
            { nombre: 'Given Up On Me', archivo: 'given_up_on_me.mp3' },
            { nombre: 'I Can’t Wait To Get There', archivo: 'i_cant_wait_to_get_there.mp3' },
            { nombre: 'Timeless', archivo: 'timeless.mp3' },
            { nombre: 'Niagara Falls', archivo: 'niagara_falls.mp3' },
            { nombre: 'Take Me Back To LA', archivo: 'take_me_back_to_la.mp3' },
            { nombre: 'Big Sleep', archivo: 'big_sleep.mp3' },
            { nombre: 'Give Me Mercy', archivo: 'give_me_mercy.mp3' },
            { nombre: 'Drive', archivo: 'drive.mp3' },
            { nombre: 'The Abyss', archivo: 'the_abyss.mp3' },
            { nombre: 'Red Terror', archivo: 'red_terror.mp3' },
            { nombre: 'Without a Warning', archivo: 'without_a_warning.mp3' },
            { nombre: 'Hurry Up Tomorrow', archivo: 'hurry_up_tomorrow.mp3' }
        ]
    };

    if (!canciones[album]) {
        console.error('Álbum no encontrado.');
        return;
    }
    const ventana = document.getElementById('ventana-canciones');
    const albumTitulo = document.getElementById('album-titulo');
    const cancionesLista = document.getElementById('canciones-lista');
    const letraCancion = document.getElementById('letra-cancion');
    const ventanaLetra = document.getElementById('ventana-letra');
    
    // Limpiar la lista de canciones anterior
    cancionesLista.innerHTML = '';

    albumTitulo.textContent = album;
    cancionesLista.innerHTML = canciones[album].map(cancion => 
        `<li onclick="reproducirCancion('${cancion.archivo}', '${cancion.nombre}'); mostrarLetra('${cancion.nombre}', '${cancion.letra || 'Letra no disponible.'}');">
            ${cancion.nombre}
        </li>`
    ).join('');

    // Ocultar la letra y la ventana al comenzar
    letraCancion.style.display = 'none';
    ventana.style.display = 'flex';
    ventanaLetra.style.display = 'none';  // Asegurarse de que la ventana de letra esté oculta inicialmente
    }


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('ventana-canciones').style.display = 'none';
});

function cerrarVentana() {
    document.getElementById('ventana-canciones').style.display = 'none';
}

function reproducirCancion(archivo, nombreCancion) {
    const reproductor = document.getElementById('reproductor');
    
    // Verificar si la canción ya está siendo reproducida
    if (cancionActual === nombreCancion) {
        return; // Si la canción ya está reproduciéndose, no hacer nada
    }
    
    if (archivo) {
        reproductor.src = archivo;
        reproductor.play();
        cancionActual = nombreCancion; // Actualizar la canción actual
    } else {
        console.warn("Archivo no disponible");
    }
}

function mostrarMasInfo() {
    let bioCompleta = document.getElementById("biografia-completa");
    let masInfo = document.getElementById("mas-info");

    if (bioCompleta.style.display === 'none') {
        bioCompleta.style.display = 'block';
        masInfo.textContent = 'Mostrar menos';
    } else {
        bioCompleta.style.display = 'none';
        masInfo.textContent = 'Mostrar más';
    }
}
