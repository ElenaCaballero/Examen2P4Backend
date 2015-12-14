var data = require('../schemas/data');
var user = require('../schemas/user');
var joi = require('joi');
var boom = require('boom');

exports.usageMonthly = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'regular']
  },
  handler: function(request, reply){
    var customer = request;
    var getData = data.find({Name: customer}, function(err, data) {
      if(!err){
        if(data.length > 0){
          return data[0].MessagesOutBytesRate;
        }
      }
    });
  reply(getData);
  }
}

exports.weeklyUsage = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'regular']
  },
  handler: function(request, reply){
    var customer = request;
    var getData = {};
    getData[0] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
       
    });
    getData[1] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
      
    });
    getData[2] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
      
    });
    getData[3] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
      
    });
    getData[4] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
      
    });
    getData[5] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
       
    });
    getData[6] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
      
    });
    reply(getData);
  }
}

exports.monthlyUsage = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'regular']
  },
  handler: function(request, reply){
    var customer = request;
    var getData = {};
    getData[0] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
        console.log(data);
    });
    getData[1] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
        console.log(data);
    });
    getData[2] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
        console.log(data);
    });
    getData[3] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
        console.log(data);
    });
    getData[4] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
        console.log(data);
    });
    getData[5] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
        console.log(data);
    });
    getData[6] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
        console.log(data);
    });
    getData[7] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
        console.log(data);
    });
    getData[8] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
        console.log(data);
    });
    getData[9] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
        console.log(data);
    });
    getData[10] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
        console.log(data);
    });
    getData[11] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
        console.log(data);
    });
    reply(getData);
  }
}

exports.currentConnections = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'regular']
  },
  handler: function(request, reply){
    var customer = request;
    var getData = {};
    getData[0] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
      console.log(data);
      if(!err){
        if(data.length > 0){
          return data[0].SessionsFlash;
        }
      }
      return reply(boom.notAcceptable('Error Executing Query'));
    });
    getData[1] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
      console.log(data);
      if(!err){
        if(data.length > 0){
          return data[0].SessionsSanJose;
        }
      }
      return reply(boom.notAcceptable('Error Executing Query'));
    });
    getData[2] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
      console.log(data);
      if(!err){
        if(data.length > 0){
          return data[0].SessionsCupertino;
        }
      }
      return reply(boom.notAcceptable('Error Executing Query'));
    });
    getData[3] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
      console.log(data);
      if(!err){
        if(data.length > 0){
          return data[0].SessionsSmooth;
        }
      }
      return reply(boom.notAcceptable('Error Executing Query'));
    });
    getData[4] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
      console.log(data);
      if(!err){
        if(data.length > 0){
          return data[0].SessionsRTSP;
        }
      }
      return reply(boom.notAcceptable('Error Executing Query'));
    });
    getData[5] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
      console.log(data);
      if(!err){
        if(data.length > 0){
          return data[0].SessionsMPEGDash;
        }
      }
      return reply(boom.notAcceptable('Error Executing Query'));
    });
    getData[7] = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
      console.log(data);
      if(!err){
        if(data.length > 0){
          return data[0].SessionsTotal;
        }
      }
      return reply(boom.notAcceptable('Error Executing Query'));
    });

    reply(getData);
  }
}

exports.connectionsWeekly = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'regular']
  },
  handler: function(request, reply){
    var customer = request;
    var getData = data.find({ApplicationInstance: {$elemMatch: {Stream: {$elemMatch: {Name: customer}}}}}, function(err, data){
      console.log(data);
      if(!err){
        if(data.length > 0){
          return data[0].SessionsTotal;
        }
      }
      return reply(boom.notAcceptable('Error Executing Query'));
    });
    reply(getData);
  }
}
