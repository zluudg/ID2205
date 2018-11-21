// Constructor for port object
function Port(mode, type, state) {
    this.mode = mode || 'in'; // in/out
    this.type = type || '_Unspecified_'; // A/B/C/D/E/F/G etc.
    this.state = state || 'disabled'; //enabled/disabled/mandatory/unavailable
    this.DEFAULT_PORT_SIZE = 8;
    this.DEFAULT_PORT_FILL = '#0000FF';
}

Port.prototype.draw = function(ctx, xp, yp) {
    ctx.fillStyle = this.DEFAULT_PORT_FILL;
    
    if (this.mode == 'in') {
        ctx.fillRect(xp - this.DEFAULT_PORT_SIZE, // compensate for port width
                     yp - this.DEFAULT_PORT_SIZE/2,
                     this.DEFAULT_PORT_SIZE,
                     this.DEFAULT_PORT_SIZE);
    }
    else if (this.mode == 'out') {
        ctx.fillRect(xp,
                     yp - this.DEFAULT_PORT_SIZE/2,
                     this.DEFAULT_PORT_SIZE,
                     this.DEFAULT_PORT_SIZE);
    }
}

Port.prototype.setState = function(state) {
    if (state == 'mandatory')
        return;
    this.state = state;
}

Port.prototype.getState = function() {
    return this.state;
}

Port.prototype.getMode = function() {
    return this.mode;
}

function PortA(state) {
    Port.call(this, 'in', 'A', state);
}
inherit(PortA, Port);

function PortB(state) {
    Port.call(this, 'in', 'B', state);
}
inherit(PortB, Port);

function PortE(state) {
    Port.call(this, 'out', 'E', state); //TODO error in GR-DMDL manual?
}
inherit(PortE, Port);

function PortG(state) {
    Port.call(this, 'in', 'G', state);
}
inherit(PortG, Port);

function PortQ(state) {
    Port.call(this, 'in', 'Q', state);
}
inherit(PortQ, Port);

function PortS(state) {
    Port.call(this, 'in', 'S', state);
}
inherit(PortS, Port);

function PortU(state) {
    Port.call(this, 'in', 'U', state);
}
inherit(PortU, Port);

function PortDATA(mode, state) {
    Port.call(this, mode, 'DATA', state);
}
inherit(PortDATA, Port);

