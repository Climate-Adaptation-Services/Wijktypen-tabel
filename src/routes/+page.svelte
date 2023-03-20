<script>

  const wijken = ['Vernieuwd', 'Bedrijven-terrein', 'Villawijk',  'Vinex-wijk', 'Bloemkool-wijk', 'Hoogbouw', 'Tuinstad hoogbouw', 'Tuinstad laagbouw', 'Naoorlogse woonwijk', 'Vooroorlogse woonwijk', 'Tuindorp', 'Volkswijk', 'Stedelijk bouwblok', 'Historische binnenstad']
  const groenPercentages = ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15']

</script>

<table>
  <tr>
    <th>leeg</th>
    {#each wijken as wijk, i}
      <th>{wijk}</th>
    {/each}
  </tr>
  <tr>
    <td>plaatje</td>
    {#each groenPercentages as perc, i}
      <td>{perc}</td>
    {/each}
  </tr>
  <tr>
    <td>plaatje</td>
    {#each groenPercentages as perc, i}
      <td>{perc}</td>
    {/each}
  </tr>
  <tr>
    <td>plaatje</td>
    {#each groenPercentages as perc, i}
      <td>{perc}</td>
    {/each}
  </tr>
  <tr>
    <td>plaatje</td>
    {#each groenPercentages as perc, i}
      <td>{perc}</td>
    {/each}
  </tr>
  <tr>
    <td>plaatje</td>
    {#each groenPercentages as perc, i}
      <td>{perc}</td>
    {/each}
  </tr>
</table>

<style>
  table{
    width:98vw;
    height:97vh;
    table-layout: fixed;
    border-spacing: 3px 3px;
  }

  td{
    background-color: #eeeeef;
  }

</style>