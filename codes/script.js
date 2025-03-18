// Función para mostrar las canciones de un álbum
function mostrarCanciones(album) {
    let canciones = {
        'House Of Balloons (2011)': [
            { nombre: 'High for This', archivo: 'high_for_this.mp3' },
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
            { nombre: 'Alone Again', archivo: '/Canciones/Alone-Again.mp3' },
            { nombre: 'Too Late', archivo: '/Canciones/Too-Late.mp3' },
            { nombre: 'Hardest to Love', archivo: '/Canciones/Hardest-To-Love.mp3' },
            { nombre: 'Scared to Live', archivo: '/Canciones/Scared-To-Live.mp3' },
            { nombre: 'Snowchild', archivo: '/Canciones/Snowchild.mp3' },
            { nombre: 'Escape from LA', archivo: '/Canciones/Escape-From-LA.mp3' },
            { nombre: 'Heartless', archivo: '/Canciones/Heartless.mp3' },
            { nombre: 'Blinding Lights', archivo: '/Canciones/The Weeknd - Blinding Lights.mp3' },
            { nombre: 'In Your Eyes', archivo: '/Canciones/In-Your-Eyes.mp3' },
            { nombre: 'Save Your Tears', archivo: '/Canciones/Save-Your-Tears.mp3' },
            { nombre: 'After Hours', archivo: '/Canciones/After-Hours.mp3' },
            { nombre: 'Until I Bleed Out', archivo: '/Canciones/Until-I-Bleed Out.mp3' }
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

    // Mostrar ventana con las canciones
    const ventana = document.getElementById('ventana-canciones');
    const albumTitulo = document.getElementById('album-titulo');
    const cancionesLista = document.getElementById('canciones-lista');

    albumTitulo.textContent = album; // Asignar correctamente el título del álbum
    cancionesLista.innerHTML = canciones[album].map(cancion => 
        `<li onclick="reproducirCancion('${cancion.archivo}')">${cancion.nombre}</li>`
    ).join('');

    ventana.style.display = 'flex';
    }
// Asegurarse de que la ventana de canciones está oculta al cargar la página
window.onload = function() {
    const ventana = document.getElementById('ventana-canciones');
    ventana.style.display = 'none';  // Asegura que la ventana esté oculta al cargar la página
};

// Función para cerrar la ventana emergente
function cerrarVentana() {
    const ventana = document.getElementById('ventana-canciones');
    ventana.style.display = 'none';
}

// Función para reproducir una canción
function reproducirCancion(archivo) {
    const reproductor = document.getElementById('reproductor');
    reproductor.src = archivo;
    reproductor.play();
}

// Función para mostrar más información
function mostrarMasInfo() {
    let bioCompleta = document.getElementById("biografia-completa");
    let masInfo = document.getElementById("mas-info");

    if (bioCompleta.style.display === "none") {
        bioCompleta.style.display = "block";
        masInfo.textContent = "Mostrar menos...";
    } else {
        bioCompleta.style.display = "none";
        masInfo.textContent = "Más información...";
    }
}