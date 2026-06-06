// Track metadata + lyrics for the Xas site.
//
// Lyrics are the sung/spoken words only — all musical and production
// instructions from the source lyric sheets ([Verse], [Chorus], [Style],
// "(sparse atmosphere…)", "(stutter vocal chops)", etc.) have been stripped.
// Stanzas are separated by a blank line; one line per sung line.

import type { ImageMetadata } from 'astro';

export interface Track {
  slug: string;
  title: string;
  note: string;
  dur: string;
  feat?: string;
  lyrics?: string;
}

export const tracks: Track[] = [
  {
    slug: 'the-silence-after',
    title: 'The Silence After',
    note: 'Love had already left. The room kept listening.',
    dur: '5:17',
    feat: 'Lucien',
    lyrics: `The lights are on
But nobody's home

We move around
Like we're trying not to wake the truth
Your hand finds mine
Out of habit now
A conversation
Neither of us starts

We know the ending
We know the line
But neither one of us
Can say goodbye

Maybe it's not you
Maybe it's the fall
Maybe it's the silence
Waiting past these walls
Maybe we're just holding
What already left
Keeping something breathing
Scared to watch it rest

Your side of the bed
Still warm to the touch
But colder than ever
A thousand little distances
We never named
The photographs
Still look alive
More than the people
Standing inside

If I let go
Who will I be?
If you walk out
What happens to me?

Maybe it was over
Long before tonight
Maybe we've been dancing
With the ghost of what we were
Maybe every promise
Was a way to buy more time
Maybe I stayed
Because leaving hurt worse

Maybe it's not you
Maybe it's the ache
Maybe it's the shadow
Of the shape we made
Maybe we're just guarding
The ruins that we built
Calling it forever
Because we're afraid of what's left

Maybe it's not you
Maybe it's the pain
Maybe that's the reason
Nothing ever changed
Maybe we're still reaching
For somebody who has gone
Holding on together
Long after the love is gone

The hardest part
Was never losing you
The hardest part
Was knowing that I already had`,
  },
  {
    slug: 'only-now',
    title: 'Only Now',
    note: 'No yesterday. No tomorrow. Just the pulse of this moment.',
    dur: '5:36',
    lyrics: `Slowly
The night unfolds
A thousand stories
Turning into gold
Breathing
Without a name
Nothing to hold
Nothing to explain

I was looking for answers
In footprints on the shore
Searching old reflections
For something more
But every road behind me
Was fading in the light
Like stars that disappear
At the edge of night

And the world grew quiet
And the noise grew thin
Like a door left open
Letting everything in
And I stopped pretending
There was somewhere to go
And the moment opened
Like a river below

"We must abandon completely the notion of blaming the past for any kind of situation we're in and reverse our thinking and see that the past always flows back from the present."
"That now is the creative point of life."
"You see it's like the idea of forgiving somebody, you change the meaning of the past by doing that."

Only now
Only this moment moving
Only now
Only this light
Only now
No distance left between us
No tomorrow to become
No yesterday undone
Only now

The river keeps flowing
Without a place to go
The sky keeps changing
Without needing to know
And everything I called mine
Dissolves into the view
Leaving only silence
And something true

Every breath returning
Every shadow gone
Every name forgotten
Yet everything lives on

Only now
The breath before the breathing
Only now
The space between the sound
Only now
The endless turning center
Where every path is found
Only now
Only now
The light behind the feeling
Only now
The silence underneath
Only now
The place I've always been
Only now

Now
Now
Now
Only now`,
  },
  {
    slug: 'here-and-now',
    title: 'Here and Now',
    note: 'A small light held steady against the noise.',
    dur: '4:57',
    lyrics: `Midnight air, electric blue
Static lights dissolve in you
Slow reflections on the glass
Like a signal from the past

Faded gold across your face
Neon shadows, empty space
Heartbeat underneath the haze
Lost inside these endless waves

We don't speak, we synchronize
Through the smoke and flashing lights
Every moment drifting slow
Like a dream we used to know

And it all comes back again
Every touch, every fragment
Falling through the atmosphere
But I still feel you here

We are breathing
Floating through the afterglow
Weightless in the undertow
Hold me close, don't let go

We are breathing
Somewhere between dark and light
Satellite hearts in the night
Calling out through the silence

Breathing… breathing…
Light-light-light…
Calling… calling…

Silver rain on avenue signs
Your reflection crossing mine
Soft distortion in your voice
Like the echo of a choice

Time dissolves beneath the sound
Feet don't even touch the ground
All the noise just fades away
Only frequencies remain

"You are an aperture through which the universe is looking at and exploring itself."
"The real you is not a puppet which life pushes around. The real deep down you is the whole universe."
"This is the real secret of life — to be completely engaged with what you are doing in the here and now."

Here and now… now… now…
Universe… universe…
Breathing… breathing…

We are breathing
Dancing in the analog sky
Watching all the colors collide
Holding on to the moment

We are breathing
Through the static and the light
Two reflections in the night
Fading into forever

Forever-ever-ever
Breathing… breathing…
Light-light-light…

Static fades into the dawn
Signal weak but carrying on
Somewhere in the endless blue
Every road still leads to you`,
  },
  {
    slug: 'every-note-remembers-something',
    title: 'Every Note Remembers Something',
    note: 'You see the painting. Not the brush strokes. You hear the laughter. Not what once broke.',
    dur: '5:09',
    lyrics: `Every note remembers something
Every note finds its way home

There are summers
Inside these melodies
There are nights
Inside these notes
Names I've forgotten
Faces I still know
Little pieces
Of everywhere I've been

You love the echo when it finds you
Like a light you've always known
Every note remembers something
Every note finds its way home
You love the echo when it finds you
Then ask me where it came from
Carrying all the years behind it
Long before the song was sung

You see the painting
Not the brush strokes
You hear the laughter
Not what once broke
You hear the answer
But not the road it took to know

You love the echo when it finds you
Like a light you've always known
Every note remembers something
Every note finds its way home
You love the echo when it finds you
Then ask me where it came from
Carrying all the years behind it
Long before the song was sung`,
  },
  {
    slug: 'dont-wake-me-up',
    title: "Don't Wake Me Up",
    note: 'In the dream, they were still there.',
    dur: '5:27',
    lyrics: `I heard your voice before the light
Soft as dust in a closing sky
You turned and smiled like nothing changed
Like all those years had slipped away

I followed you through empty rooms
The air was warm, the colors new
For a moment I forgot the cost
For a moment you were not lost

Then the ceiling came into view
Morning pulling me from you
The room returned, the colors drained
And silence took your place again
I closed my eyes to hold the thread
Back to the words you never said
But daylight pulled me from the dark
And left me with your fading spark

I wake up reaching for a ghost
Holding on to what I almost know
For a second you're still here
Then daylight makes you disappear
I wake up carrying your name
Like a photograph washed by rain
Every morning starts the same
I lose you again

The sheets are cold, the city's grey
The dream dissolves but somehow stays
A trace of you inside the room
A fading scent, a borrowed moon
And the world begins to move
While I'm still somewhere with you

I wake up reaching for a ghost
Holding on to what I almost know
For a second you're still here
Then daylight makes you disappear
I wake up carrying your name
Like a photograph washed by rain
Every morning starts the same
I lose you again
I lose you again
I lose you again

You were here
You were real
For a little while
Then the sun
Touched the room
And took you with it`,
  },
  {
    slug: 'motion',
    title: 'Motion',
    note: 'The past falls behind, but never completely lets go.',
    dur: '4:54',
    lyrics: `The city lights change
But they blur all the same
I carry old names
That don't answer today
A photograph bends
In the fold of my coat
I keep moving ahead
While it slips from my hold

Every mile that I cross
Leaves a little behind
There's a future in front of me
And a past I can't find

Motion, motion
Pulling me away
Motion, motion
From the things I couldn't save (couldn't save)
Motion, motion
Further every night
Motion, motion
Chasing fading lights

The streets that I knew
Live somewhere in the dark
Like traces of fire
After losing the spark
I reach for the shape
Of the life that I knew
But the road keeps unfolding
Into something new

Every mile that I cross
Leaves a little behind
There's a future in front of me
And a past I can't find

Motion, motion
Pulling me away
Motion, motion
From the things I couldn't save (couldn't save)
Motion, motion
Further every night
Motion, motion
Chasing fading lights

What I was grows smaller
In the rear-view glow
What I'll be keeps calling
From somewhere I don't know
One more turn, one more horizon
One more thing erased
I keep following tomorrow
As yesterday fades

Motion, motion
Pulling me away
Motion, motion
From the things I couldn't save (couldn't save)
Motion, motion
Further every night
Motion, motion
Chasing fading lights (fading lights)`,
  },
  {
    slug: 'neon-noir',
    title: 'Neon Noir',
    note: 'Streetlight, shadow, and a heartbeat under glass.',
    dur: '3:03',
    lyrics: `Néons bleus sur le périph'
Minuit traverse la ville
Le béton respire encore
Et nos corps deviennent électriques

Les vitres tremblent sous les basses
Tes yeux brillent comme des lasers
On danse contre les machines
Dans un paradis nucléaire

Les ombres glissent sur les murs
Chrome et fumée dans l'air noir
La jeunesse brûle en silence
Comme un moteur après le soir

Plus vite
Plus fort
On disparaît dans le décor

Danse
Sous les lumières artificielles
Danse
Comme si demain n'existait plus
Danse
Au rythme des satellites
Nous deux
Perdus dans la fréquence

Le DJ découpe le temps
Avec des synthés froids et blancs
Ta voix traverse la fumée
Comme un signal dans l'océan

Les sirènes au loin résonnent
Mais personne ne veut partir
On laisse nos noms sur les murs
Avant de s'éteindre au matin

Analogique
Mécanique
Romantique
Automatique

Ton souffle contre ma peau
Dans le vacarme digital

Encore
Encore
Jusqu'au lever du soleil
Encore
Encore
Jusqu'à perdre le réel

Danse
Sous les lumières artificielles
Danse
Comme si demain n'existait plus
Danse
Au rythme des satellites
Nous deux
Perdus dans la fréquence

Le jour revient sur les toits
Les néons meurent un à un
Mais dans les câbles de la ville
Ton écho tourne encore`,
  },
];

// Cover art lives in src/assets/tracks/<slug>.png so Astro's image pipeline
// (astro:assets) can resize + convert it at build time. cover(slug) returns the
// ImageMetadata to hand to the <Image> component (NOT a URL string).
const covers = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/tracks/*.png',
  { eager: true },
);

export const cover = (s: string): ImageMetadata => {
  const mod = covers[`../assets/tracks/${s}.png`];
  if (!mod) throw new Error(`Missing cover image for track "${s}" (expected src/assets/tracks/${s}.png)`);
  return mod.default;
};
