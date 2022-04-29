var affect_grid1 = `
    <table class="ag_table">
      <tr><td style="text-align:center" class="ag_label">緊張</td><td style="text-align:center" class="ag_label">活動的<br/>（覚醒）</td><td style="text-align:center" class="ag_label">興奮</td></tr>
      <tr><td style="text-align:right" class="ag_label">不快　</td><td>
        <table>
          <tr class="ag_cell">
            <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag08" value="-4, 4" required="required"/><label class="ag-inline__label" for="ag08"></label></td>
            <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag18" value="-3, 4"/><label class="ag-inline__label" for="ag18"></label></td>
            <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag28" value="-2, 4"/><label class="ag-inline__label" for="ag28"></label></td>
            <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag38" value="-1, 4"/><label class="ag-inline__label" for="ag38"></label></td>
            <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag48" value=" 0, 4"/><label class="ag-inline__label" for="ag48"></label></td>
            <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag58" value=" 1, 4"/><label class="ag-inline__label" for="ag58"></label></td>
            <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag68" value=" 2, 4"/><label class="ag-inline__label" for="ag68"></label></td>
            <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag78" value=" 3, 4"/><label class="ag-inline__label" for="ag78"></label></td>
            <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag88" value=" 4, 4"/><label class="ag-inline__label" for="ag88"></label></td>
            </tr>
            <tr class="ag_cell">
              <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag07" value="-4, 3"/><label class="ag-inline__label" for="ag07"></label></td>
              <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag17" value="-3, 3"/><label class="ag-inline__label" for="ag17"></label></td>
              <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag27" value="-2, 3"/><label class="ag-inline__label" for="ag27"></label></td>
              <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag37" value="-1, 3"/><label class="ag-inline__label" for="ag37"></label></td>
              <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag47" value=" 0, 3"/><label class="ag-inline__label" for="ag47"></label></td>
              <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag57" value=" 1, 3"/><label class="ag-inline__label" for="ag57"></label></td>
              <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag67" value=" 2, 3"/><label class="ag-inline__label" for="ag67"></label></td>
              <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag77" value=" 3, 3"/><label class="ag-inline__label" for="ag77"></label></td>
              <td class="ag_cell"><input type="radio" name="ag1" class="ag-inline__input" id="ag87" value=" 4, 3"/><label class="ag-inline__label" for="ag87"></label></td>
            </tr>
            <tr class="ag_cell">
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag06" value="-4, 2"/><label class="ag-inline__label" for="ag06"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag16" value="-3, 2"/><label class="ag-inline__label" for="ag16"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag26" value="-2, 2"/><label class="ag-inline__label" for="ag26"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag36" value="-1, 2"/><label class="ag-inline__label" for="ag36"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag46" value=" 0, 2"/><label class="ag-inline__label" for="ag46"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag56" value=" 1, 2"/><label class="ag-inline__label" for="ag56"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag66" value=" 2, 2"/><label class="ag-inline__label" for="ag66"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag76" value=" 3, 2"/><label class="ag-inline__label" for="ag76"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag86" value=" 4, 2"/><label class="ag-inline__label" for="ag86"></label></td>
            </tr>
            <tr class="ag_cell">
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag05" value="-4, 1"/><label class="ag-inline__label" for="ag05"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag15" value="-3, 1"/><label class="ag-inline__label" for="ag15"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag25" value="-2, 1"/><label class="ag-inline__label" for="ag25"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag35" value="-1, 1"/><label class="ag-inline__label" for="ag35"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag45" value=" 0, 1"/><label class="ag-inline__label" for="ag45"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag55" value=" 1, 1"/><label class="ag-inline__label" for="ag55"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag65" value=" 2, 1"/><label class="ag-inline__label" for="ag65"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag75" value=" 3, 1"/><label class="ag-inline__label" for="ag75"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag85" value=" 4, 1"/><label class="ag-inline__label" for="ag85"></label></td>
            </tr>
            <tr class="ag_cell">
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag04" value="-4, 0"/><label class="ag-inline__label" for="ag04"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag14" value="-3, 0"/><label class="ag-inline__label" for="ag14"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag24" value="-2, 0"/><label class="ag-inline__label" for="ag24"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag34" value="-1, 0"/><label class="ag-inline__label" for="ag34"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag44" value=" 0, 0"/><label class="ag-inline__label" for="ag44"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag54" value=" 1, 0"/><label class="ag-inline__label" for="ag54"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag64" value=" 2, 0"/><label class="ag-inline__label" for="ag64"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag74" value=" 3, 0"/><label class="ag-inline__label" for="ag74"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag84" value=" 4, 0"/><label class="ag-inline__label" for="ag84"></label></td>
            </tr>
            <tr class="ag_cell">
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag03" value="-4,-1"/><label class="ag-inline__label" for="ag03"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag13" value="-3,-1"/><label class="ag-inline__label" for="ag13"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag23" value="-2,-1"/><label class="ag-inline__label" for="ag23"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag33" value="-1,-1"/><label class="ag-inline__label" for="ag33"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag43" value=" 0,-1"/><label class="ag-inline__label" for="ag43"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag53" value=" 1,-1"/><label class="ag-inline__label" for="ag53"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag63" value=" 2,-1"/><label class="ag-inline__label" for="ag63"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag73" value=" 3,-1"/><label class="ag-inline__label" for="ag73"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag83" value=" 4,-1"/><label class="ag-inline__label" for="ag83"></label></td>
            </tr>
            <tr class="ag_cell">
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag02" value="-4,-2"/><label class="ag-inline__label" for="ag02"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag12" value="-3,-2"/><label class="ag-inline__label" for="ag12"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag22" value="-2,-2"/><label class="ag-inline__label" for="ag22"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag32" value="-1,-2"/><label class="ag-inline__label" for="ag32"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag42" value=" 0,-2"/><label class="ag-inline__label" for="ag42"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag52" value=" 1,-2"/><label class="ag-inline__label" for="ag52"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag62" value=" 2,-2"/><label class="ag-inline__label" for="ag62"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag72" value=" 3,-2"/><label class="ag-inline__label" for="ag72"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag82" value=" 4,-2"/><label class="ag-inline__label" for="ag82"></label></td>
            </tr>
            <tr class="ag_cell">
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag01" value="-4,-3"/><label class="ag-inline__label" for="ag01"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag11" value="-3,-3"/><label class="ag-inline__label" for="ag11"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag21" value="-2,-3"/><label class="ag-inline__label" for="ag21"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag31" value="-1,-3"/><label class="ag-inline__label" for="ag31"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag41" value=" 0,-3"/><label class="ag-inline__label" for="ag41"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag51" value=" 1,-3"/><label class="ag-inline__label" for="ag51"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag61" value=" 2,-3"/><label class="ag-inline__label" for="ag61"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag71" value=" 3,-3"/><label class="ag-inline__label" for="ag71"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag81" value=" 4,-3"/><label class="ag-inline__label" for="ag81"></label></td>
            </tr>
            <tr class="ag_cell">
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag00" value="-4,-4"/><label class="ag-inline__label" for="ag00"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag10" value="-3,-4"/><label class="ag-inline__label" for="ag10"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag20" value="-2,-4"/><label class="ag-inline__label" for="ag20"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag30" value="-1,-4"/><label class="ag-inline__label" for="ag30"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag40" value=" 0,-4"/><label class="ag-inline__label" for="ag40"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag50" value=" 1,-4"/><label class="ag-inline__label" for="ag50"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag60" value=" 2,-4"/><label class="ag-inline__label" for="ag60"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag70" value=" 3,-4"/><label class="ag-inline__label" for="ag70"></label></td>
              <td><input type="radio" name="ag1" class="ag-inline__input" id="ag80" value=" 4,-4"/><label class="ag-inline__label" for="ag80"></label></td>
            </tr>
          </table></td>
        <td style="text-align:left" class="ag_label">　快い</td>
      </tr>
      <tr><td style="text-align:center" class="ag_label">落ち込み</td><td style="text-align:center" class="ag_label">非活動的<br/>（眠気）</td><td style="text-align:center" class="ag_label">リラックス</td></tr>    
    </table><br/>`;
