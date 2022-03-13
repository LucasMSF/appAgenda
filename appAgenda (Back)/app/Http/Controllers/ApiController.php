<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getAllContacts()
    {
        $contacts = Contact::all()->toJson();
        return response($contacts, 200);
    }

    public function createContact(Request $request)
    {
        if(Contact::where('email', $request->email)->exists()) {
            return response()->json([
                "message" => "Contato com esse E-mail já cadastrado!"
            ], 406);    
        }

        $contact = new Contact();
        $contact->nome = $request->nome;
        $contact->email = $request->email;
        $contact->telefone = $request->telefone;
        $contact->cep = $request->cep;
        $contact->save();

        return response()->json([
            "message" => "Contato criado com sucesso!"
        ], 201);
    }

    public function getContact($id)
    {
        if (Contact::where('id', $id)->exists()) {
            $contact = Contact::where('id', $id)->get()->first()->toJson();
            return response($contact, 200);
        } else {
            return response()->json([
                "message" => "Contato não encontrado!"
            ], 404);
        }
    }

    public function updateContact(Request $request, $id)
    {
        if (Contact::where('id', $id)->exists()) {
            $contact = Contact::find($id);
            $contact->update([
                'nome' => is_null($request->nome) ? $contact->nome : $request->nome,
                'email' => is_null($request->email) ? $contact->email : $request->email,
                'telefone' => is_null($request->telefone) ? $contact->telefone : $request->telefone,
                'cep' => is_null($request->cep) ? $contact->cep : $request->cep
            ]);

            return response()->json([
                "message" => "Contato Atualizado com sucesso!"
            ], 200);
        } else {
            return response()->json([
                "message" => "Contato não encontrado!"
            ], 404);
        }
    }

    public function deleteContact($id)
    {
        if (Contact::where('id', $id)->exists()) {

            Contact::find($id)->delete();

            return response()->json([
                "message" => "Contato Deletado com sucesso!"
            ], 200);
        } else {
            return response()->json([
                "message" => "Contato não encontrado!"
            ], 404);
        }
    }
}
