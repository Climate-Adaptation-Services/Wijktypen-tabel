<script>
  import Table from '$lib/components/Table.svelte'

  import _ from 'lodash';
  export let data;
  let csvData;
  let wijken
  let bouwjaren
  let hoogtes
  let groenen
  let groenranges
  let hittes
  let wateroverlasten

  Promise.resolve(data.data).then(res => {
		console.log(res)
		csvData = res
    wijken = _.map(csvData, 'Wijk')
    bouwjaren = _.map(csvData, 'Bouwjaar')
    hoogtes = _.map(csvData, 'Hoogte')
    groenen = _.map(csvData, 'Groen')
    groenranges = _.map(csvData, 'GroenRange')
    hittes = _.map(csvData, 'Hitte')
    wateroverlasten = _.map(csvData, 'Wateroverlast')
	})

</script>

{#if wijken}
  <Table {csvData} {wijken} {bouwjaren} {hoogtes} {groenen} {groenranges} {hittes} {wateroverlasten} />
{/if}

<style>
</style>