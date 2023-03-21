<script>
  import _ from 'lodash';
  
  export let data;
  let csvData = data.data

  const wijken = _.map(csvData, 'Wijk')
  const bouwjaren = _.map(csvData, 'Bouwjaar')
  const hoogtes = _.map(csvData, 'Hoogte')
  const groenen = _.map(csvData, 'Groen')
  const hittes = _.map(csvData, 'Hitte')
  const wateroverlasten = _.map(csvData, 'Wateroverlast')

  const gebouwhoogte = {
    '2,6':'midden',
    '1,4':'laag',
    '3,10':'hooglaag',
    '4,10':'hooglaag',
    '3,5':'midden',
    '2,3':'laag',
    '2,4':'laag',
    '4,6':'midden',
    '3,5':'midden'
  }

</script>

<table>
  <tr>
    <th></th>
    {#each wijken as wijk, i}
      <th>{wijk}</th>
    {/each}
  </tr>
  <tr>
    <td class='tdimage'>
      <img class='category_image' src='/images/bouwjaar.png'/>
      <p>Bouwjaar</p>
    </td>
    {#each bouwjaren as bouwjaar, i}
      <td>
        <!-- ANNO -->
        {bouwjaar}
      </td>
    {/each}
  </tr>
  <tr>
    <td class='tdimage'>
      <img class='category_image' src='/images/hoogte.png'/>
      <p>Hoogte</p>
    </td>
    {#each hoogtes as hoogte, i}
      <td>        
        {#if hoogte}
          <img src='/images/{gebouwhoogte[hoogte]}.png' style="width:40%" />
          <p class='hoogtetekst'>{hoogte.split(',')[0] + ' tot ' + hoogte.split(',')[1] + ' lagen'}</p>
        {/if}
      </td>
    {/each}
  </tr>
  <tr>
    <td class='tdimage'>
      <img class='category_image' src='/images/groen.png'/>
      <p>Groen</p>
    </td>
    {#each groenen as groen, i}  
      <td>
        {#if groen}
          <img src='/images/tree.png' style="width:{groen*1.6}%" />
          <p>{groen}%</p>
        {/if}
      </td>
    {/each}
  </tr>
  <tr>
    <td class='tdimage'>
      <img class='category_image' src='/images/hitte.png'/>
      <p>Hitte</p>
    </td>
    {#each hittes as hitte, i}
      <td>
        {#if hitte}
          <img src='/images/hitte{hitte}.png' style='width:30%'/>
          <p>{hitte}</p>
        {/if}
      </td>
    {/each}
  </tr>
  <tr>
    <td class='tdimage'>
      <img class='category_image' src='/images/wateroverlast.png'/>
      <p>Water-overlast</p>
    </td>
    {#each wateroverlasten as wateroverlast, i}
      <td>
        {#if wateroverlast}
          <img src='/images/wateroverlast{wateroverlast}.png' style='width:16%'/>
          <p>{wateroverlast}</p>
        {/if}
      </td>
    {/each}
  </tr>
</table>

<style>
  table{
    width:98vw;
    height:97vh;
    table-layout: fixed;
    border-spacing: 5px 5px;
  }

  td{
    background-color: #f8f8f9;
    text-align: center;
    position: relative;
    color:rgb(96, 96, 96);
    height:16vh;
    font-size:14px;
  }
  th{
    font-size:12px;
    color:rgb(96, 96, 96)
  }
  .tdimage{
    background-color: white;
  }

  .category_image{
    width:50%;
  }
  p{
    text-align: center;
    position:absolute;
    width:100%;
    bottom:3px;
    margin-bottom: 0px;
  }

  .hoogtetekst{
    font-size:10px;
  }

</style>