// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-id-init-fn-name-fn.case
// - src/dstr-binding/default/var-stmt.template
/*---
description: SingleNameBinding assigns name to "anonymous" functions (`var` statement)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [destructuring-binding]
flags: [generated]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    6. If Initializer is present and v is undefined, then
       a. Let defaultValue be the result of evaluating Initializer.
       b. Let v be GetValue(defaultValue).
       c. ReturnIfAbrupt(v).
       d. If IsAnonymousFunctionDefinition(Initializer) is true, then
          [...]
    7. If environment is undefined, return PutValue(lhs, v).
    8. Return InitializeReferencedBinding(lhs, v).
---*/

var [fn = function () {}, xFn = function x() {}] = [];

assert.sameValue(fn.name, 'fn');
assert.notSameValue(xFn.name, 'xFn');
