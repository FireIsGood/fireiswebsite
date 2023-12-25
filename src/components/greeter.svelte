<script lang="ts">
    export let greetings: string[];
    const getRandomIndex = () => Math.floor(Math.random() * greetings.length);
    let randomGreeting = greetings[getRandomIndex()];

    function newGreeting() {
        randomGreeting = greetings[getRandomIndex()];
    }
</script>

<p>{randomGreeting}</p>
<button on:click={newGreeting}>New greeting</button>
