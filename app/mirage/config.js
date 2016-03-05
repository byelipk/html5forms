export default function() {
  this.post('/accounts', function(db, request) {
    let data    = JSON.parse(request.requestBody).data;
    let account = db.accounts.insert(data.attributes);

    return {
      data: {
        type: 'accounts',
        id: account.id,
        attributes: data.attributes
      }
    };
  });
}
