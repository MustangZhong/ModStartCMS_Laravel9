<table class="ub-lister-table mini">
    <tbody>
    @foreach($customFields as $customField)
        <tr>
            <td width="100">{{$customField['title']}}:</td>
            <td>
                @if(in_array($customField['fieldType'],[
                    'text','textarea','video','audio'
                ]))
                    {{$data[$customField['name']] or '-'}}
                @else
                    {{$data[$customField['name']] or '-'}}
                @endif
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
