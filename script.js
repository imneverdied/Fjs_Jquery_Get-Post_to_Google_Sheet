function post() {
  $.post(
    'https://script.google.com/macros/s/AKfycbxQJTm7A7_sG87mG3GASKs8rvTNMPxt5FIwMmiDGX1D7doGXA/exec',
    {
      STATUS: 'insert',
      ID: $(INPUT_ID).val(),
      NAME: $(INPUT_NAME).val(),
      PATH: $(INPUT_PATH).val(),
      MNT_DT: $(DT_NOW).text()
    },
    function(data, status) {
      alert(data + '\nStatus: ' + status);
    }
  );
}

function update() {
  $.post(
    'https://script.google.com/macros/s/AKfycbxQJTm7A7_sG87mG3GASKs8rvTNMPxt5FIwMmiDGX1D7doGXA/exec',
    {
      STATUS: 'update',
      whereID: $(INPUT_whereID).val(),
      NAME: $(INPUT_NAME).val(),
      PATH: $(INPUT_PATH).val(),
      MNT_DT: $(DT_NOW).text()
    },
    function(data, status) {
      alert(data + '\nStatus: ' + status);
    }
  );
}

function GET() {
  $.ajax({
    type: 'GET',
    url:
      'https://docs.google.com/spreadsheets/u/0/d/1MXbtBPR_mDg16sM7SjjzMjX0mkNvvM2gZ-MG23C1-Hs/gviz/tq?tqx=out:html&tq&gid=0',
    success: function(data) {
      var res = data;
      var tableH = res.indexOf('table');
      var tableT = res.lastIndexOf('table');

      $(TEST).html(res);
      res = res.substring(tableH - 1, tableT + 7);

      res = 字串取代('<tr style="background-color: #f0f0f0">', '', res);
      res = 字串取代('<tr style="background-color: #ffffff">', '', res);
      res = 字串取代('</tr>', '', res);
      res = 字串取代(
        '<tr style="font-weight: bold; background-color: #aaa;">',
        '',
        res
      );
      res = 字串取代(' border="1" cellpadding="2" cellspacing="0"', '', res);
      res = 字串取代('\n\n', '', res);
      res = 字串取代('<table>', '', res);
      res = 字串取代('</table>', '', res);
      res = 字串取代(' align="right"', '', res);
      //$(REXML).html(res);
      $(REXML).text(res);
    },
    dataType: 'html'
  });
}

function SQL_GET() {
  let stringSQL = $('#T_SQL').val();
  stringSQL = 字串取代('ID', 'A', stringSQL);
  stringSQL = 字串取代('NAME', 'B', stringSQL);
  stringSQL = 字串取代('PATH', 'C', stringSQL);

  let strSQL =
    'https://docs.google.com/spreadsheets/u/0/d/1MXbtBPR_mDg16sM7SjjzMjX0mkNvvM2gZ-MG23C1-Hs/gviz/tq?tqx=out:html&tq=' +
    stringSQL +
    '&gid=0';
  $.ajax({
    type: 'GET',
    url: strSQL,
    success: function(data) {
      var res = data;
      var tableH = res.indexOf('table');
      var tableT = res.lastIndexOf('table');

      $(TEST).html(res);
      res = res.substring(tableH - 1, tableT + 7);

      res = 字串取代('<tr style="background-color: #f0f0f0">', '', res);
      res = 字串取代('<tr style="background-color: #ffffff">', '', res);
      res = 字串取代('</tr>', '', res);
      res = 字串取代(
        '<tr style="font-weight: bold; background-color: #aaa;">',
        '',
        res
      );
      res = 字串取代(' border="1" cellpadding="2" cellspacing="0"', '', res);
      res = 字串取代('\n\n', '', res);
      res = 字串取代('<table>', '', res);
      res = 字串取代('</table>', '', res);
      res = 字串取代(' align="right"', '', res);
      //$(REXML).html(res);
      $(REXML).text(res);
    },
    dataType: 'html'
  });
}

function 字串取代(被替換的字串, 要替換的字串, 原字串) {
  let 換好的字串 = '';
  換好的字串 = 原字串.replace(new RegExp(被替換的字串, 'g'), 要替換的字串);
  return 換好的字串;
}

String.prototype.hashCode = function() {
  var hash = 0,
    i,
    chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

function TIME() {
  let TIME = moment().format('YYYY-MM-DD HH:mm:ss');
  $(DT_NOW).text(TIME);
  setTimeout('TIME()', 500);
}
