'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('cy-utilities.startHttpServer', () => {
        vscode.window.createTerminal().sendText("http-server");
        vscode.window.createTerminal().sendText("livereload");
    }));
}

export function deactivate() {
}