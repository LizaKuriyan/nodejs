var formidable = require('formidable');
var http = require('http');
var fs = require('fs');
var path = require('path');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2c56f98cf71e8d",
    pass: "4dd5881b8aa530"
  }
});

var server = http.createServer((req, res) => {
  if (req.url == '/fileupload' && req.method.toLowerCase() === 'post') {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('An error occurred during the file upload');
        return;
      }

      var oldpath = files.filetoupload[0].filepath;
      var newpath = path.join(process.cwd(), 'uploads', files.filetoupload[0].originalFilename);

      fs.rename(oldpath, newpath, function (err) {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('An error occurred while moving the file');
          return;
        }

        var mailOptions = {
          from: 'no-reply@example.com',
          to: 'friend@example.com',
          subject: 'New File Uploaded',
          text: `A file named ${files.filetoupload[0].originalFilename} has been uploaded.`
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('File uploaded but email sending failed.');
          } else {
            console.log("Email sent: " + info.response);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File uploaded and email sent successfully!');
          }
        });
      });
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
  }
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
